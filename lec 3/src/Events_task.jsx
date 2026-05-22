// Task: (without Hook)

// Create a component to perform the tasks as described below:

// 1. Add a text field and a submit button.

// - While changing the value in the text field, display it below the form.

// - Display this text field value in an alert box upon submitting it.

 

// 2. Add a button to perform click and double-click event tasks.

// - On click event, display message in h3 tag “You clicked once”.

// - On double-click event, display message in h3 tag “You clicked twice”.

// - Display these message should be displayed below the button.


function Events_task(){
    const oc1 = ()=>{
        document.getElementById("b").innerHTML="Clicked One Times"
    }
    const och = (e)=>{
        document.getElementById("a").innerHTML = e.target.value
    }
    const odc = ()=>{
        document.getElementById("b").innerHTML="Clicked Two Times"
    }
    const os = (e)=>{
        e.preventDefault()
        alert(d.getElementById("c").value)
    }
    return(
        <>
        <form onSubmit={os}>
            <input type="text" id="c" onChange={och} />
            <input type="submit" />
        </form>
        <h1 id="a">Event Demo-1</h1>
        <button onClick={oc1} onDoubleClick={odc}>Click/Double click</button>
        <h1 id="b">Click/Double Click Demo</h1>
        
        </>
    )
}
export default Events_task