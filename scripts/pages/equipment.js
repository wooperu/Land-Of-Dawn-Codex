document.addEventListener('DOMContentLoaded', () => {
  const itemGrid = document.getElementById('itemGrid');
  const categoryTabs = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('itemSearch');
  const sortSelect = document.getElementById('itemSort');
  
  const emptyState = document.getElementById('emptyState');
  const detailsContent = document.getElementById('detailsContent');
  const resetBtn = document.getElementById('resetBtn');

  // Holds the data fetched from JSON
  let equipmentData = [];

  // Fetch the JSON Data (Requires a local server like VS Code Live Server)
  fetch('data/equipment.json')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      equipmentData = data;
      filterEquipment();
    })
    .catch(error => {
      console.error("Error loading equipment JSON:", error);
      itemGrid.innerHTML = '<p style="color:red; padding:2rem;">Error loading items. Ensure you are running a local server.</p>';
    });

  // --- RENDER ITEMS IN THE GRID ---
  function renderItems(itemsToRender) {
    itemGrid.innerHTML = ''; // Clear grid before generating new items

    if(itemsToRender.length === 0) {
      itemGrid.innerHTML = '<p style="color:var(--muted); grid-column: 1 / -1; text-align:center; padding: 2rem;">No items found.</p>';
      return;
    }

    itemsToRender.forEach(item => {
      const card = document.createElement('div');
      card.className = 'item-card';
      // Store data attributes for filtering
      card.setAttribute('data-id', item.id);
      card.setAttribute('data-category', item.category.join(' '));
      card.setAttribute('data-name', item.name.toLowerCase());

      card.innerHTML = `
        <img src="${item.icon}" alt="${item.name}" class="item-icon">
        <div class="item-name">${item.name}</div>
        <div class="item-price"><span class="coin">💰</span> ${item.pricing.price}</div>
      `;

      // Click Event to Show Details
      card.addEventListener('click', () => {
        // Highlight active card
        document.querySelectorAll('.item-card').forEach(c => c.classList.remove('active-item'));
        card.classList.add('active-item');

        populateDetails(item);
      });

      itemGrid.appendChild(card);
    });
  }

  // --- POPULATE THE DETAILS PANE ---
  function populateDetails(item) {
    emptyState.style.display = 'none';
    detailsContent.style.display = 'block';

    // Left Side
    document.getElementById('detIcon').src = item.icon;
    document.getElementById('detName').textContent = item.name;
    document.getElementById('detSubtitle').textContent = item.subtitle;
    
    // Convert array of stats into HTML paragraphs
    const statsContainer = document.getElementById('detStats');
    statsContainer.innerHTML = item.stats.map(stat => `<p>${stat}</p>`).join('');
    
    document.getElementById('detDesc').textContent = item.description;
    
    // Handle recipe
    const recipeContainer = document.getElementById('detRecipeTree');
    
    // Check if the item actually builds from something
    if (item.buildsFrom && item.buildsFrom.length > 0) {
      // Wrap the generated tree in the main UL and inject it
      recipeContainer.innerHTML = `<div class="recipe-tree"><ul>${generateRecipeTreeHTML(item.id)}</ul></div>`;
      recipeContainer.parentElement.style.display = 'block'; // Ensure the section is visible
    } else {
      // If it's a Tier 1 item with no recipe, hide the recipe section
      recipeContainer.innerHTML = '';
      recipeContainer.parentElement.style.display = 'none';
    }

    // Right Side: In-Depth Info
    document.getElementById('infoType').textContent = item.inDepth.type;
    document.getElementById('infoSellable').textContent = item.inDepth.sellable;
    document.getElementById('infoAvail').textContent = item.inDepth.availableFor;
    document.getElementById('infoSlot').textContent = item.inDepth.takesSlot;

    // Right Side: Pricing
    document.getElementById('priceBuy').textContent = item.pricing.price;
    document.getElementById('priceUp').textContent = item.pricing.upgradePrice;
    document.getElementById('priceSell').textContent = item.pricing.sellPrice;

    // Auto-scroll to details on mobile screens
    if (window.innerWidth <= 1024) {
      document.getElementById('equipment-details').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --- RECURSIVE RECIPE TREE GENERATOR ---
  function generateRecipeTreeHTML(itemId) {
    // Find the item in our JSON data
    const item = equipmentData.find(i => i.id === itemId);
    
    // If the item isn't found (or is a base item with no ingredients), just return
    if (!item) return '';

    // Draw the current item
    let html = `<li>`;
    html += `<div class="tree-node"><img src="${item.icon}" alt="${item.name}" title="${item.name}" class="recipe-item-img" data-id="${item.id}"></div>`;
    
    // If it has ingredients, create a sub-list and call this function again!
    if (item.buildsFrom && item.buildsFrom.length > 0) {
      html += `<ul>`;
      item.buildsFrom.forEach(childId => {
        html += generateRecipeTreeHTML(childId); 
      });
      html += `</ul>`;
    }

    html += `</li>`;
    return html;
  }

  const recipeContainerWrapper = document.getElementById('detRecipeTree');
  
  recipeContainerWrapper.addEventListener('click', (event) => {
    // Check if the thing we clicked has the 'recipe-item-img' class
    if (event.target.classList.contains('recipe-item-img')) {
      
      const clickedItemId = event.target.getAttribute('data-id');
      const itemToSelect = equipmentData.find(i => i.id === clickedItemId);

      if (itemToSelect) {
        // 1. Populate the details pane with the newly clicked item
        populateDetails(itemToSelect);

        // 2. Remove the glowing border from all items in the main grid
        document.querySelectorAll('.item-card').forEach(c => c.classList.remove('active-item'));
        
        // 3. Find the corresponding item card in the main grid and highlight it
        const correspondingCard = document.querySelector(`.item-card[data-id="${clickedItemId}"]`);
        if (correspondingCard) {
          correspondingCard.classList.add('active-item');
          
          // Optional: Smoothly scroll the main grid so the newly selected item is visible
          correspondingCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }
  });

  // --- FILTERING AND SORTING LOGIC (SEARCH + TABS + SORT) ---
  function filterEquipment() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeTabBtn = document.querySelector('.tab-btn.active');
    const activeCategory = activeTabBtn ? activeTabBtn.getAttribute('data-category') : 'all';
    const sortValue = sortSelect.value; // Get current sort selection

    // 1. FILTER the data
    let processedData = equipmentData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm);
      const matchesCategory = (activeCategory === 'all' || item.category.includes(activeCategory));
      return matchesSearch && matchesCategory;
    });

    // 2. SORT the filtered data
    if (sortValue !== 'default') {
      processedData.sort((a, b) => {
        if (sortValue === 'name-asc') {
          return a.name.localeCompare(b.name);
        } else if (sortValue === 'name-desc') {
          return b.name.localeCompare(a.name);
        } else if (sortValue === 'price-asc') {
          return a.pricing.price - b.pricing.price;
        } else if (sortValue === 'price-desc') {
          return b.pricing.price - a.pricing.price;
        }
      });
    }

    // 3. Render the processed data
    renderItems(processedData);
  }

  // Listeners for triggers
  searchInput.addEventListener('input', filterEquipment);
  sortSelect.addEventListener('change', filterEquipment); // <-- NEW LISTENER

  categoryTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      filterEquipment();
    });
  });
});

