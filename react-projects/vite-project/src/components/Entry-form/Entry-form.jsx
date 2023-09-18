import "./Entry-Form.css"
export function EntryForm({ addOnEntry }) {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        addOnEntry(data)
        event.target.reset();
        event.target.motto.focus();
        
}

    return (
        <form className="entry-form" onSubmit={handleSubmit}>
            <h2>NEW ENTRY</h2>
            <label>
                Motto: <br></br>
                <input type="text" name="motto" id="motto"></input>
            </label>
            <label>
                Notes: <br></br><textarea name="notes" id="notes"></textarea>
            </label>
            <button className="submit-button" type="submit">Create</button>
        </form>
    )
}