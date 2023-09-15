import "./Entry-Form.css"
export function EntryForm ({addOnEntry}) {
    function handleSubmit (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const newObject = {
            motto: data.motto,
            notes: data.notes
        }

        addOnEntry(newObject)

    }
    return (
        <form onSubmit={handleSubmit} className="entry-form">
         <h2>NEW ENTRY</h2>
         <label> 
         Motto: <br></br>
         <input type="text"></input>
         </label>
         <label> 
         Notes: <br></br><textarea></textarea>
         </label>
         <button className="submit-button" type="submit">Create</button>
        </form>
    )
}