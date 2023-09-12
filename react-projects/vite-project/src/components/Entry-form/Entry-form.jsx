import "./Entry-Form.css"
export function EntryForm () {
    return (
        <form className="entry-form">
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