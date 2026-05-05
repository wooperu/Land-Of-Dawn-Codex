/* 
DEFINITION OF TERMS:

rank (r): a row on the chessboard, numbered 1 to 8 starting from White's side
file (f): a column on the chessboard, labeled a to h starting from White's left

pawn (bP, wP): the most basic piece that moves forward 1 square (or 2 squares on its first move) and captures diagonally. the pawn has two special moves: en passant and promotion.

    1. en passant: a special pawn capture that can only occur immediately after an opponent's pawn moves forward 2 squares from its starting position, landing beside the player's pawn. the player's pawn can capture it "en passant" as if it had only moved 1 square forward, but this capture must be made on the very next move or the right to do so is lost.

    2. promotion: when a pawn reaches the farthest rank from its starting position, it can be "promoted" to any other piece (except a king), usually a queen.

knight (bN, wN): a piece that moves in an L-shape: 2 squares in one direction and then 1 square perpendicular to that. the knight is the only piece that can "jump" over other pieces, meaning its movement is not blocked by pieces in its path.

bishop (bB, wB): a piece that moves diagonally any number of squares, but cannot jump over other pieces.

rook (bR, wR): a piece that moves horizontally or vertically any number of squares, but cannot jump over other pieces.

queen (bQ, wQ): a piece that can move in any direction (horizontally, vertically, or diagonally) any number of squares, but cannot jump over other pieces.

king (bK, wK): the most important piece that can move one square in any direction. the king also has a special move called castling.

    - castling: a special move involving the king and one of the rooks, where the king moves two squares towards the rook and the rook moves to the square immediately on the other side of the king. castling can only be done if these three conditions are fulfilled: 
        1. neither piece has moved
        2. there are no pieces between them
        3. and the king does not pass through or end up on a square that is under attack.
        
legal move: a move that follows the movement rules for the piece and does not leave the player's king in check. legal moves are highlighted on the board when a piece is selected.

capture: when a piece moves to a square occupied by an enemy piece, it removes it from the board, effectively "capturing" it.

check: a situation where a king is under attack by an enemy piece. the player whose king is in check must make a move that gets their king out of check on their next turn, either by moving the king, capturing the attacking piece, or blocking the attack with another piece.

checkmate: a situation where a king is in check and there are no legal moves to get out of check. the player whose king is checkmated loses the game.

stalemate: a situation where a player has no legal moves but their king is not in check. stalemate results in a draw.

50 move rule: if 50 consecutive moves are made without any pawn movement or piece capture, either player can claim a draw by the 50-move rule. in this implementation, the game automatically ends in a draw when the half-move clock reaches 100 (which is 50 full moves).

algebraic notation: the standard way to record chess moves using the piece type and destination squares, and special symbols for captures, castling, and promotion. 
    - examples: e4 (pawn to e4), 
    bh3 (bishop moves to h3),
    Nf3 (knight to file f3),
    Rxe5 (rook captures enemy on e5), 
    O-O (kingside castling), 
    d8=Q (pawn promotes to queen)

*/

const elBoard = document.getElementById("board");

/* an 8x8 2d array that represents the chessboard, with null for empty squares and two-character strings for pieces 
(e.g. 'wP' for white pawn, 'bK' for black king) */
let board = [
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'], // row 0 = rank 8—where the black pieces start
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'] // row 7 = rank 1—where the white pieces start
];

// file labels for converting between array indices and algebraic notation
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const color = (p) => p ? p[0] : null; // returns the color of a piece using p[0] of p which is usually (board[r][f]), e.g. 'w' or 'b'
const pieceType = (p) => p ? p[1] : null; // returns the type of a piece using p[1] of p which is usually (board[r][f]), e.g. 'K', 'P'

 // checks if a position is within the bounds of the board, since the board is 8x8 and array indices go from 0 to 7, r and f must be between 0 and 7. 
const inBounds = (r, f) => r >= 0 && r < 8 && f >= 0 && f < 8;

let selected = null; // stores the currently selected square as {r, f}, or null if no square is selected
let legalMoves = []; // stores the legal moves for the currently selected piece
let turn = 'w'; // stores whose turn it is to move ('w' for white, 'b' for black)
let enPassant = null; // stores the en passant target square as {r, f}, or null if there is no en passant target
let castling = { wK: true, wQ: true, bK: true, bQ: true }; // keeps track of whether castling is possible for both sides
let history = []; // stores the history of moves made in the game so the player can undo
let capturedByWhite = []; // stores pieces captured by white
let capturedByBlack = []; // stores pieces captured by black
let moveHistory = []; // stores algebraic notation of every move for the move history panel
let lastMove = null; // stores {from, to} of the most recent move for highlighting in css
let pendingPromo = null; // stores {fr, ff, move} when a pawn promotion is waiting for piece selection
let halfMoveClock = 0; // counts half-moves since the last pawn move or capture, used for the 50-move rule

// function to reset the game to the initial state, called when the page loads and when the player clicks "Play Again"
function resetGame() {

    // resets the content of the board array to the initial position with pieces in their starting squares and null for empty squares
    board = [
        ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
        ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
        ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
    ];

    // resets all game state variables to their initial values
    turn = 'w';
    selected = null;
    legalMoves = [];
    enPassant = null;
    castling = { wK: true, wQ: true, bK: true, bQ: true };
    history = [];
    capturedByWhite = [];
    capturedByBlack = [];
    moveHistory = [];
    lastMove = null;
    pendingPromo = null;
    halfMoveClock = 0;

    // closes the promotion and game-end modals in case they are open, then renders the initial board and sidebar
    document.getElementById('promoModal').classList.remove('open');
    document.getElementById('gameEndModal').classList.remove('active');
    renderBoard();
    updateSidebar();
}

// function to render the chessboard based on the current state of the board array and other game state variables, called after any change to the game state to update the visual display
function renderBoard() {

    // clears the existing board squares so they can be re-rendered according to the current game state. this is simpler than trying to update only the squares that changed, since many things can change on the board after a move (e.g. piece positions, legal move highlights, last move highlight, check highlight, selection highlight). so its better to just re-render the board every time.
    elBoard.innerHTML = '';

    // finds the king that is currently in check by using isInCheck() to check if the current player's king is in check, and if so, uses findKing() to get its position. if the king is not in check, inCheckKing will be null and no square will be highlighted.
    const inCheckKing = isInCheck(turn, board) ? findKing(turn, board) : null; 

    // iterates through each square on the board to create the HTML elements for the squares and pieces, and applies the appropriate CSS classes for coloring, highlights, and piece images based on the current game state
    for (let r = 0; r < 8; r++) { // loops through each rank (row) from 0 to 7
        for (let f = 0; f < 8; f++) { // loops through each file (column) from 0 to 7

            const square = document.createElement('div'); // creates a new div element to represent the square
            const isLight = (r + f) % 2 == 0; // uses even/odd formula to determine if the square should be light (yellow) or dark (blue)

            // applies the last-move highlight or the default light/dark color
            if (lastMove && ((lastMove.from.r == r && lastMove.from.f == f) || (lastMove.to.r == r && lastMove.to.f == f))) {
                // uses different highlight colors for light and dark squares to help with visibility of the highlight
                square.className = isLight ? 'last-move-light' : 'last-move-dark'; 
            } else {
                // applies the default light or dark class based on the square color if it is not highlighted as the last move
                square.className = isLight ? 'light' : 'dark';
            }

            // overrides the default color with selection highlight if this square is currently selected
            if (selected && selected.r == r && selected.f == f) {
                square.className = 'selected';
            }

            // adds a red glow to the king's square if it is in check
            if (inCheckKing && inCheckKing.r == r && inCheckKing.f == f) {
                square.classList.add('inCheck');
            }

            // places the piece image on the square
            const piece = board[r][f]; // gets the piece on the current square
            if (piece) { // if piece isn't null, create an img element for it and set the source to the image file based on piece type and color
                const img = document.createElement('img');
                img.src = `images/chess/${piece}.png`;
                img.alt = piece;
                img.className = 'pieceImg';
                img.draggable = false; // to ensure the image won't get accidentally dragged
                square.appendChild(img);
            }

            // checks if this square is in the legalMoves array for the currently selected piece, and if so, adds a highlight to indicate it is a legal move. uses different indicators for captures (ring) and non-captures (dot) to help the player visualize their options.
            // .some in javascript is used to check if at least one element in the array satisfies the condition being set.
            if (legalMoves.some(m => m.r == r && m.f == f)) {
                const hasEnemy = board[r][f] && color(board[r][f]) !== turn; // checks if the legal square contains an enemy piece (capture)
                const indicator = document.createElement('div');
                if (hasEnemy) {
                    indicator.className = 'legalRing'; // ring around the piece for captures
                } else {
                    indicator.className = 'legalDot'; // small dot for empty squares
                }
                square.appendChild(indicator);
            }

            // adds a click event listener to the square that calls handleClick with the rank and file of the clicked square, which will handle selecting pieces and making moves based on the current game state
            square.addEventListener('click', () => handleClick(r, f));
            elBoard.appendChild(square);
        }
    }

    // builds the rank labels (8 down to 1) along the left side of the board
    const rankEl = document.getElementById('rankLabel');
    rankEl.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        const s = document.createElement('span');
        s.textContent = 8 - r;
        rankEl.appendChild(s);
    }

    // builds the file labels (a through h) below the board
    const fileEl = document.getElementById('fileLabel');
    fileEl.innerHTML = '';
    for (let f = 0; f < 8; f++) {
        const s = document.createElement('span');
        s.textContent = FILES[f];
        fileEl.appendChild(s);
    }
}

// handle click events on the board squares to select pieces and make moves. this function is called whenever a square on the board is clicked, and it determines what to do based on the current game state, such as whether a piece is already selected, whether the clicked square is a legal move, and whether the game is waiting for a promotion choice.
function handleClick(r, f) {
    if (pendingPromo) return;         // blocks all board interaction while waiting for promotion choice
    if (!hasAnyMoves(turn)) return;   // stops interaction when the game is over

    if (selected) {
        const move = legalMoves.find(m => m.r == r && m.f == f); // checks if the clicked square is a legal move

        // if it is a legal move, calls executeMove function with the position it is moving from (selected.r, selected.f) and the position it is moving to (move.r, move.f)
        if (move) { 
            executeMove(selected.r, selected.f, move);
            return;
        }

        // reset selected piece and legal moves if the player clicks on an invalid square
        selected = null;
        legalMoves = [];
    }

    // selects the piece if it belongs to the current player
    if (color(board[r][f]) == turn) {
        selected = { r, f }; // sets the selected square to the clicked square
        legalMoves = getLegalMoves(r, f, board, enPassant, castling); // calculates the legal moves for the piece on the selected square, which will be highlighted on the board
    }

    renderBoard(); // re-renders the board to update the highlights for the selected piece and its legal moves
}

// gets all legal moves for a pawn at the given rank (r) and file (f) on the board, taking into account the pawn's color, en passant target, and promotion possibilities. this function is separate from getRawMoves because pawns have unique movement rules that require special handling. 
function getPawnMoves(r, f, board, col, ep) {
    const moves    = []; // an array to store all legal moves for the pawn at the given rank and file
    const dir      = col == 'b' ? 1 : -1; // determines the direction the pawn moves (black moves down, white moves up)
    const startRow = col == 'b' ? 1 : 6;  // determines the starting row for the pawn based on its color

    // move forward 1 square — checks if the square directly in front is within bounds and empty
    if (inBounds(r + dir, f) && !board[r + dir][f]) {
        // adds the move to the moves array with the destination rank and file
        moves.push({ r: r + dir, f });

        // move forward 2 squares from the starting position, the square directly in front must also be empty since pawns cannot jump over pieces
        if (r == startRow && !board[r + 2 * dir][f]) {
            // adds the double move to the moves array with the destination rank and file
            moves.push({ r: r + 2 * dir, f });
        }
    }

    // capture diagonal logic
    for (const df of [-1, 1]) { // iterates through the two possible diagonal directions (left and right) for capturing
        if (!inBounds(r + dir, f + df)) continue; // checks if the diagonal square is within bounds
        const target = board[r + dir][f + df]; // gets the piece on the diagonal square
        if (target && color(target) !== col) {     // checks if there is an enemy piece on the diagonal square
            // adds the capture move to the moves array
            moves.push({ r: r + dir, f: f + df });
        }

        // checks if the diagonal square matches the current en passant target square
        if (ep && ep.r == r + dir && ep.f == f + df) {
            // adds the en passant capture move to the moves array with a special flag to indicate it is an en passant move
            moves.push({ r: r + dir, f: f + df, special: 'ep' });
        }
    }

    // checks any move from the pawn that lands on the back rank so executeMove knows to trigger promotion
    const promoRow = col == 'w' ? 0 : 7; // white promotes on row 0, black promotes on row 7
    for (let i = 0; i < moves.length; i++) { // iterates through the moves array 
        if (moves[i].r == promoRow && !moves[i].special) { // if the move lands on the promotion row and isn't already marked as a special move 
            moves[i].special = 'promote'; // adds a special flag to indicate it's a promotion move 
        }
    }

    return moves; // after checking all possible pawn moves, returns the array of legal moves for the pawn at the given rank and file
}

// helper function to generate moves for sliding pieces (rook, bishop, queen) by iterating in a given direction until it goes out of bounds or hits another piece. this function is called by getRawMoves for each direction the piece can slide in, and it adds legal moves to the moves array based on the rules for sliding pieces.
function slide(r, f, dr, df, col, board, moves) {
    let nr = r + dr, nf = f + df; // calculates the next rank and file in the given direction (dr, df) from the starting position (r, f)

    while (inBounds(nr, nf)) { // assuming the next square is within bounds, checks if it is empty or occupied by a piece
        const target = board[nr][nf]; // gets the piece on the next square

        if (target) { // if there is a piece on the next square
            if (color(target) !== col) { // checks if the piece is an enemy
                moves.push({ r: nr, f: nf }); // enemy piece, can capture it
            }
            break; // stops sliding regardless because the pieces cannot pass through any piece
        }

        moves.push({ r: nr, f: nf }); // empty square, adds it as a legal move and keeps sliding

        // increments the rank and file to continue sliding in the same direction
        nr += dr; 
        nf += df; 
    }
}

// generates all possible moves for a piece
function getRawMoves(r, f, board, ep, cast) {

    // gets the piece on the given square, if there is no piece, returns an empty array since there are no moves to generate
    const piece = board[r][f];
    if (!piece) return [];

    // determines the color and type of the piece using the helper functions above
    const col   = color(piece);
    const pt    = pieceType(piece);
    const moves = []; // this array will be populated with all possible moves for the piece at the given rank and file
    
    if (pt == 'P') {
        return getPawnMoves(r, f, board, col, ep); // pawns have their own function due to their special movement rules
    }

    if (pt == 'R') {
        for (const [dr, df] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) // rook slides in 4 straight directions
            slide(r, f, dr, df, col, board, moves); // calls the slide function for each direction to populate the moves array with legal moves for the rook based on the current board state
    }

    if (pt == 'B') {
        for (const [dr, df] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) // bishop slides in 4 diagonal directions
            slide(r, f, dr, df, col, board, moves); 
    }

    if (pt == 'Q') { // queen moves are just a combination of rook and bishop since it slides in all 8 directions
        for (const [dr, df] of [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]])
            slide(r, f, dr, df, col, board, moves);
    }

    if (pt == 'N') { // does not use slide because knight can jump over other pieces
        for (const [dr, df] of [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]) {
            const nr = r + dr, nf = f + df; // gets the destination square for the knight's L-shaped jump
            if (inBounds(nr, nf) && color(board[nr][nf]) !== col) { // checks if the square is on the board and not occupied by a friendly piece
                moves.push({ r: nr, f: nf });
            }
        }
    }

    if (pt == 'K') { // does not use slide because king can only move one square in any direction, and also has special castling rules that are handled separately below
        for (const [dr, df] of [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]) {
            const nr = r + dr, nf = f + df; // calculates each of the 8 adjacent squares the king can move to
            if (inBounds(nr, nf) && color(board[nr][nf]) !== col) { // checks if the square is on the board and not occupied by a friendly piece
                moves.push({ r: nr, f: nf });
            }
        }

        // castling logic 
        if (cast) {
            const row = col == 'w' ? 7 : 0; // determines the row where the king and rooks start based on the color
            // castling can only be done if the king is on its original square, which is rank 7 (white) or 0 (black) and file 4 in the array
            if (r == row && f == 4) { 
                // kingside castling
                if (cast[col + 'K'] && !board[row][5] && !board[row][6] // checks if castling is still allowed and if the squares between the king and rook are empty
                    // makes sure that the squares the king passes through (4, 5, 6) are not under attack, since the king cannot castle out of, through, or into check
                    && !isSquareAttacked(row, 4, col, board) 
                    && !isSquareAttacked(row, 5, col, board)
                    && !isSquareAttacked(row, 6, col, board)) {
                    moves.push({ r: row, f: 6, special: 'castleK' });
                }
                // queenside castling: same conditions but on the queen's side with an extra empty square check
                if (cast[col + 'Q'] && !board[row][1] && !board[row][2] && !board[row][3]
                    && !isSquareAttacked(row, 4, col, board)
                    && !isSquareAttacked(row, 3, col, board)
                    && !isSquareAttacked(row, 2, col, board)) {
                    moves.push({ r: row, f: 2, special: 'castleQ' });
                }
            }
        }
    }

    return moves; // after checking all possible moves for the piece based on its type and the current board state, returns the array of legal moves for the piece at the given rank and file
}

// function to check if a square at rank r and file f is being attacked by any enemy pieces, which is used to determine if the king is in check and to validate castling moves. 
function isSquareAttacked(r, f, col, board) {
    const enemy = col == 'w' ? 'b' : 'w'; // if the color of the piece is white, then the enemy pieces are black, and vice versa

    // iterates through all squares to find enemy pieces and checks if any of them can move to the target square
    for (let er = 0; er < 8; er++) {
        for (let ef = 0; ef < 8; ef++) {
            if (color(board[er][ef]) !== enemy) continue; // if the square doesn't contain an enemy piece, skip it
            const moves = getRawMoves(er, ef, board, null, null); // get the possible moves for the enemy piece
            // if any (.some) of the enemy piece's moves can attack the target square, then the square is under attack 
            if (moves.some(m => m.r == r && m.f == f)) { 
                return true;
            }
        }
    }
    return false; // if the condition is not met, then the square is not under attack by any enemy pieces
}

// function to find the position of the king for a given color on the board, which is used by isInCheck to determine if the king is in check. 
function findKing(col, board) {
    // iterates through the ranks and files of the board to search for the king piece that matches the given color
    for (let r = 0; r < 8; r++) { 
        for (let f = 0; f < 8; f++) {
            if (board[r][f] == col + 'K') { // searches every square for the king belonging to the given color
                return { r, f }; // return position of the king
            }
        }
    }
}

// checks if king of the given color is in check
function isInCheck(col, board) {
    const king = findKing(col, board); // finds the king belonging to the given color
    if (!king) return false;
    return isSquareAttacked(king.r, king.f, col, board); // checks if the square the king is on is being attacked by any enemy pieces
}

// gets legal moves for a piece at the given rank and file by first generating all possible moves with getRawMoves, then filtering out any moves that would leave the king in check
function getLegalMoves(r, f, board, ep, cast) {
    const piece = board[r][f]; // gets the piece on the given square
    if (!piece) return []; // if no piece, no movees
    const col = color(piece); // gets color of the piece

    const raw = getRawMoves(r, f, board, ep, cast); // gets all possible raw moves

    // move is each individual move object in the raw moves array, and the filter will return only the moves for which the condition is true, meaning the moves that do not leave the king in check after they are made
    return raw.filter(move => { 
        const boardCopy = board.map(row => [...row]); // creates a copy of the board so the real board is not affected

        boardCopy[move.r][move.f] = boardCopy[r][f]; // moves the piece to the target square on the copy
        boardCopy[r][f] = null; // empties the original square on the copy

        // also removes the captured pawn from the copy since it sits on a different square from the destination
        if (move.special == 'ep') {
            boardCopy[r][move.f] = null; // the captured pawn is on the same row as the moving pawn but the same file as the destination
        }

        return !isInCheck(col, boardCopy); // the move is legal only if the king is not in check after it
    });
}

// checks if the current player has any legal moves left
function hasAnyMoves(col) {
    for (let r = 0; r < 8; r++) { // iterates through board
        for (let f = 0; f < 8; f++) {
            if (color(board[r][f]) == col) { // finds all pieces belonging to the given color
                if (getLegalMoves(r, f, board, enPassant, castling).length > 0) { // checks if this piece has at least one legal move
                    return true; // player still has legal moves available, so not checkmate or stalemate
                }
            }
        }
    }
    return false; // no pieces of the given color have any legal moves
}


// executes a move from the square at rank fr and file ff to the destination square in the move object, handling all special cases like en passant, castling, promotion, and capture tracking.
function executeMove(fr, ff, move, promoChoice) {
    const piece    = board[fr][ff];
    const col      = color(piece);
    const captured = move.special == 'ep' ? board[fr][move.f] : board[move.r][move.f]; // en passant captures the pawn beside the moving pawn, not the piece on the destination square, so the captured piece must be read from a different square depending on the type of move

    // if the move is a promotion but no piece has been chosen yet, stores the pending move details and opens the promotion modal, then exits early. executeMove will be called again once the player picks a piece from the modal, this time with promoChoice filled in.
    if (move.special == 'promote' && !promoChoice) {
        pendingPromo = { fr, ff, move };
        showPromoModal(col);
        return;
    }

    // converts the move to algebraic notation before applying it to the board, since the original piece and board state are still needed to determine the correct notation.
    const notation = toAlgebraic(fr, ff, move, piece, captured, promoChoice); 

    // takes a full snapshot of the game state before making any changes so that undoMove can restore everything exactly as it was.
    history.push({
        board: board.map(row => [...row]),
        turn,
        castling: { ...castling },
        enPassant,
        capturedByWhite: [...capturedByWhite],
        capturedByBlack: [...capturedByBlack],
        moveHistory: moveHistory.map(m => ({ ...m })),
        lastMove,
        halfMoveClock
    });

    // adds the captured piece to the appropriate captured list so it can be displayed in the sidebar
    if (captured) {
        if (col == 'w') capturedByWhite.push(captured);
        else capturedByBlack.push(captured);
    }

    // moves the piece to its destination square and clears the original square
    board[move.r][move.f] = piece;
    board[fr][ff] = null;

    // moves the kingside rook to f1 or f8 to complete the castling move
    if (move.special == 'castleK') {
        const row = col == 'w' ? 7 : 0;
        board[row][5] = col + 'R';
        board[row][7] = null;
    }

    // moves the queenside rook to d1 or d8 to complete the castling move
    if (move.special == 'castleQ') {
        const row = col == 'w' ? 7 : 0;
        board[row][3] = col + 'R';
        board[row][0] = null;
    }

    // removes the captured pawn from its actual square, since in en passant the captured pawn sits beside the moving pawn rather than on the destination square that the moving pawn lands on
    if (move.special == 'ep') {
        board[fr][move.f] = null;
    }

    // replaces the pawn with the player's chosen promotion piece once it reaches the back rank, defaulting to queen if somehow no choice was provided
    if (move.special == 'promote') {
        board[move.r][move.f] = col + (promoChoice || 'Q');
    }

    // revokes castling rights when the king or a rook moves from its starting square, since castling requires neither piece to have moved at any point in the game
    if (pieceType(piece) == 'K') {
        castling[col + 'K'] = false;
        castling[col + 'Q'] = false;
    }
    if (pieceType(piece) == 'R' && ff == 7) castling[col + 'K'] = false; // kingside rook left its starting square
    if (pieceType(piece) == 'R' && ff == 0) castling[col + 'Q'] = false; // queenside rook left its starting square

    // clears the en passant target at the start of every turn since it is only valid for one move, then sets a new target if a pawn just double-pushed so the opponent can capture it next turn
    enPassant = null;
    if (pieceType(piece) == 'P' && Math.abs(move.r - fr) == 2) {
        // the target is the square the pawn skipped over, which is where an en passant capture would land
        enPassant = { r: (fr + move.r) / 2, f: move.f }; 
    }

    // resets the half-move clock to zero on any pawn move or capture since both of these make it impossible to repeat the position, otherwise increments it. once the clock reaches 100 (50 full moves), the game is declared a draw.
    if (pieceType(piece) == 'P' || captured) {
        halfMoveClock = 0;
    } else {
        halfMoveClock++;
    }

    // adds the move notation to the move history panel. white's move always starts a new row, and black's move fills in the second column of that same row.
    if (col == 'w') {
        moveHistory.push({ w: notation, b: null });
    } else if (moveHistory.length > 0) {
        moveHistory[moveHistory.length - 1].b = notation;
    }

    lastMove = { from: { r: fr, f: ff }, to: { r: move.r, f: move.f } }; // records the squares involved in this move so they can be highlighted on the board after rendering

    turn = turn == 'w' ? 'b' : 'w'; // passes the turn to the other player now that the move has been fully applied

    // resets selection state and closes the promotion modal before re-rendering, since the move is now complete
    selected     = null;
    legalMoves   = [];
    pendingPromo = null;
    document.getElementById('promoModal').classList.remove('open');

    renderBoard();
    updateSidebar();

    // checks for game-ending conditions after every move. the 50-move rule is checked first since it applies regardless of whether there are legal moves remaining. if the next player has no legal moves, the game ends in checkmate if their king is in check, or stalemate if it is not.
    if (halfMoveClock >= 100) {
        showGameEndModal(false, true);
    } else if (!hasAnyMoves(turn)) {
        showGameEndModal(isInCheck(turn, board), false);
    }
}

// updates the sidebar information such as turn indicator, check status, captured pieces, and move history based on the current game state. called after any change to the game state to keep the sidebar display in sync with the board.
function updateSidebar() {

    const inCheck = isInCheck(turn, board); // checks if the current player's king is in check
    const statusEl = document.getElementById('statusText'); // gets the element that displays the status message at the top of the sidebar
    const turnName = turn == 'w' ? 'Blue' : 'Red'; // blue and red because mlbb usually has red and blue side instead of white and black, and also the sprites follow that

    // shows a check warning if the current player's king is under attack, otherwise shows whose turn it is
    if (inCheck) {
        statusEl.textContent = turnName + ' is in check';
        statusEl.className   = 'danger';
    } else {
        statusEl.textContent = turnName + ' to move';
        statusEl.className   = '';
    }

    // updates the turn indicator dot and label
    document.getElementById('turnDot').className = 'turnDot ' + (turn == 'w' ? 'white' : 'black');
    document.getElementById('turnLabel').textContent = turnName;

    // sorts captured pieces by value order (Q > R > B > N > P) and displays them as images
    const sortOrder = 'QRBNP';

    // creates a sorted copy of the captured pieces array by comparing the index of each piece type in the sortOrder string, so that higher value pieces are displayed first in the sidebar.
    const sortPieces = arr => [...arr].sort((a, b) => sortOrder.indexOf(pieceType(a)) - sortOrder.indexOf(pieceType(b)));

    // maps each captured piece to an img element with the corresponding piece image, and joins them into a single string of HTML to be displayed in the sidebar. this is done separately for pieces captured by white and black.
    document.getElementById('capWhite').innerHTML = sortPieces(capturedByWhite).map(p => `<img src="images/chess/${p}.png" class="captured-img" alt="${p}">`).join('');
    document.getElementById('capBlack').innerHTML = sortPieces(capturedByBlack).map(p => `<img src="images/chess/${p}.png" class="captured-img" alt="${p}">`).join('');

    // renders the move history list with move numbers and algebraic notation
    const listEl = document.getElementById('moveList');

    // maps each move in the moveHistory array to a div containing the move number, white's move, and black's move. 
    listEl.innerHTML = moveHistory.map((m, i) =>

        // creates one row for each move pair (white move and black move)
        `<div class="moveRow"> 

            <!-- display the move number (starting at 1)-->
            <span class="moveNum">${i + 1}.</span>

            <!-- display the white move, if move is equal to the last move in the history, then it will have the current class and will have a highlight-->
            <span class="moveW${i == moveHistory.length - 1 ? ' current' : ''}"> ${m.w}</span>

            <!-- display the black move, if move is equal to the last move in the history, then it will have the current class and will have a highlight, however if black has no move yet, it will be empty -->
            <span class="moveB${i == moveHistory.length - 1 && m.b ? ' current' : ''}"> ${m.b || ''}</span>
        </div>`

    // joins all the rows into one HTML string
    ).join('');
    listEl.scrollTop = listEl.scrollHeight; // auto-scrolls to the latest move
}

// converts a move into algebraic notation for the move history panel
function toAlgebraic(fr, ff, move, piece, captured, promoChoice) {
    // special notation for castling moves
    if (move.special == 'castleK') return 'O-O';
    if (move.special == 'castleQ') return 'O-O-O';

    // gets piece type, file letter to move to, and rank number to move to for the destination square of the move
    const pt = pieceType(piece);
    const file = FILES[move.f]; // file is determined by the move's destination file index equivalent in the FILES array, which maps 0-7 as 'a'-'h'
    const rank = 8 - move.r; // rank is minus 8 because it is displayed from White's perspective, thus making it reverse of the array index

    let notation = pt !== 'P' ? pt : ''; // piece letter prefix, omitted for pawns in standard algebraic notation
    if (pt == 'P' && captured) notation = FILES[ff]; // pawn captures include the departure file
    if (captured || move.special == 'ep') notation += 'x'; // 'x' denotes a capture
    notation += file + rank; // adds the destination square to the notation
    if (move.special == 'promote') notation += `=${promoChoice}`; // indicates pawn promotion

    return notation; // returns the final algebraic notation string for the move, which will be displayed in the move history panel
}

// undoes the last move by popping the most recent game state from the history stack and restoring all game variables to the previous state
function undoMove() {
    if (history.length == 0) return; // nothing to undo
    const previous       = history.pop(); // gets the most recent saved state from the history stack
    board                = previous.board;
    turn                 = previous.turn;
    castling             = previous.castling;
    enPassant            = previous.enPassant;
    capturedByWhite      = previous.capturedByWhite;
    capturedByBlack      = previous.capturedByBlack;
    moveHistory          = previous.moveHistory;
    lastMove             = previous.lastMove;
    halfMoveClock        = previous.halfMoveClock; 
    // resets selection and legal moves since the player may want to select a different piece after undoing
    selected             = null; 
    legalMoves           = [];
    pendingPromo         = null;
    document.getElementById('promoModal').classList.remove('open'); // closes the promotion modal if it was open, since we are reverting to a previous state where the promotion choice has not been made
    // document.getElementById('gameEndModal').classList.remove('active'); i might add a view board in game end modal feature later
    renderBoard(); // re-renders the board to reflect the reverted game state after undoing the move
    updateSidebar(); // updates the sidebar to reflect the reverted game state, including turn indicator, captured pieces, and move history after undoing the move
}

// displays the promotion modal with the four promotion piece choices for the given color
function showPromoModal(col) {
    const optsEl = document.getElementById('promoOptions'); // gets the element that will contain the promotion options
    optsEl.innerHTML = ''; // clears any existing options in the promotion modal before adding the new ones

    // iterates through the possible promotion pieces (Queen, Rook, Bishop, Knight) to create a button for each option in the promotion modal
    for (const pt of ['Q', 'R', 'B', 'N']) { 
        const btn = document.createElement('div');
        btn.className = 'promoPiece';

        // tooltip text for each promotion piece option
        if (pt == 'Q') btn.title = 'Queen';
        if (pt == 'R') btn.title = 'Rook';
        if (pt == 'B') btn.title = 'Bishop';
        if (pt == 'N') btn.title = 'Knight'; 

        const img = document.createElement('img');
        img.src = `images/chess/${col + pt}.png`;
        img.alt = col + pt;
        img.className = 'pieceImg';
        btn.appendChild(img);

        btn.onclick = () => { // onclick handler for promotion piece selection
                const { fr, ff, move } = pendingPromo; // sets the from rank, from file, and move object from the pendingPromo variable, which was set when the player made the move that triggered the promotion modal
                executeMove(fr, ff, move, pt); // executes the move with the chosen promotion piece
        };
        optsEl.appendChild(btn);
    }

    document.getElementById('promoModal').classList.add('open'); // shows the promotion modal by adding the 'open' class, which triggers the CSS to display it
}

// shows the game end modal with the result message and a play again button
function showGameEndModal(isCheckmate, is50MoveRule) { // arguments are the ways in which the game can end

    // gets modal, title, and message elements to update the content of the modal based on how the game ended
    const modal = document.getElementById('gameEndModal');
    const title = document.getElementById('gameEndTitle');
    const message = document.getElementById('gameEndMessage');

    // sets the title and message depending on the situation
    if (is50MoveRule) {
        title.textContent   = 'Draw!';
        message.textContent = "It's a draw — 50-move rule.";
    } else if (isCheckmate) {
        const winner        = turn == 'w' ? 'Black' : 'White'; // the player whose turn it is has no moves, so the other player won
        title.textContent   = 'Checkmate!';
        message.textContent = winner + ' wins!';
    } else {
        title.textContent   = 'Stalemate!';
        message.textContent = "It's a draw — no legal moves remaining.";
    }

    // shows the modal by adding the 'active' class, which triggers the CSS to display it
    modal.classList.add('active');
}

resetGame();