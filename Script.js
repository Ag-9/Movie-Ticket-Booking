function bookTicket(movie) {
    const rowSelection = `
        <h1>Booking for ${movie}</h1>
        <p>Select your seat:</p>
        <form id="seatForm">
            <label for="row">Row:</label>
            <select id="row" name="row">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
            </select>
            <br><br>
            <button type="submit">Book Seat</button>
        </form>
    `;

    document.body.innerHTML = rowSelection;

    document.getElementById('seatForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.getElementById('row').value;
        alert(`You have booked a seat in row ${row} for ${movie}`);
    });
}