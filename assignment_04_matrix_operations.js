// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");

function readMatrix(rows, cols, name) {
    const matrix = [];

    console.log(`Enter values for ${name}:`);
    for (let i = 0; i < rows; i++) {
        const row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(" ")
            .map(Number);

        if (row.length !== cols) {
            console.log(`Please enter exactly ${cols} numbers.`);
            i--;
        } else {
            matrix.push(row);
        }
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

function transposeMatrix(matrix) {
    const result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

function addMatrices(matrix1, matrix2) {
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

function multiplyMatrices(matrix1, matrix2) {
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < matrix2.length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

function main() {
    console.log("PART A - Transpose Matrix");
    const rowsA = readlineSync.questionInt("Enter number of rows: ");
    const colsA = readlineSync.questionInt("Enter number of columns: ");
    const matrixA = readMatrix(rowsA, colsA, "Matrix");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrixA);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrixA));

    console.log("\nPART B - Add Two Matrices");
    const rowsB = readlineSync.questionInt("Enter number of rows: ");
    const colsB = readlineSync.questionInt("Enter number of columns: ");

    const matrixB1 = readMatrix(rowsB, colsB, "Matrix 1");
    const matrixB2 = readMatrix(rowsB, colsB, "Matrix 2");

    console.log("\nSum of Matrices:");
    displayMatrix(addMatrices(matrixB1, matrixB2));

    console.log("\nPART C - Multiply Two Matrices");
    const rowsC1 = readlineSync.questionInt("Enter rows of Matrix A: ");
    const colsC1 = readlineSync.questionInt("Enter columns of Matrix A: ");
    const matrixC1 = readMatrix(rowsC1, colsC1, "Matrix A");

    const rowsC2 = readlineSync.questionInt("Enter rows of Matrix B: ");
    const colsC2 = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (colsC1 !== rowsC2) {
        console.log("Matrix multiplication is not possible.");
        return;
    }

    const matrixC2 = readMatrix(rowsC2, colsC2, "Matrix B");

    console.log("\nProduct of Matrices:");
    displayMatrix(multiplyMatrices(matrixC1, matrixC2));
}

main();
