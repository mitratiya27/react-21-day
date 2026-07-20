import React, { useState } from "react";

export default function TodoList() {
    const [activity, setActivity] = useState('');
    const [listData, setlistData] = useState([]);

    function addActivity() {
        setlistData((listdata) => {
            const updatedList = [...listData,
                {
                    text: activity,
                    completed: false,
                },
            ];
        

            console.log(updatedList)
            setActivity('');
            return updatedList;
        })

    }

    function removeActivity(i) {

        const updatedListData = listData.filter((elem, id) => { return i != id; })
        setlistData(updatedListData);

    }

    function removeAll() {
        setlistData([]);
    }

    const toggleComplete = (index) => {
    const updatedList = [...listData];

    updatedList[index].completed = !updatedList[index].completed;

    setlistData(updatedList);
};

    return (
        <>
            <div className="container">
                <div className="header">Todo List</div>
                <input type='text'
                    placeholder="Add Activity"
                    value={activity}
                    onChange={(e) => { setActivity(e.target.value) }} />
                <button onClick={addActivity}>Add</button>
                <p>Here Your List :</p>

                {listData.map((data, i) => (
                <p
                    key={i}
                    style={{
                        textDecoration: data.completed ? "line-through" : "none",
                        color: data.completed ? "gray" : "black",
                    }}
                >
                {i + 1}. {data.text}

                <div>
                    <button onClick={() => toggleComplete(i)}>
                    {data.completed ? "Undo" : "Complete"}
                    </button>

                    <button onClick={() => removeActivity(i)}>
                        Remove
                    </button>
                </div>
                </p>
                ))}
                {listData.length>1 && <p><button onClick={removeAll}>Remove All</button></p>}
            </div>
        </>
    );
}
































/* 
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);

    function addActivity(){
        setlistData((listData)=>{
            const updatedList = [...listData,activity]
            setActivity('');
            return updatedList;
        })
    }
    function removeActivity(i){
        const updatedListData= listData.filter((elem ,id)=>{return i!=id;})
        setlistData(updatedListData);
    }
    return (
        <>
            <div className="container">
                <div className="header">Todo List</div><br />
                <input type="text"
                       placeholder="Add Activity" 
                       value={activity}  
                       onChange={(e)=>{setActivity(e.target.value)}}/>
                <button onClick={addActivity}>Add</button>
                <p> Here Your List :{")"}</p>
                {
                    listData!= [] && listData.map((data,i)=>{
                        return(
                        <>
                            <p key= {i}>
                                <div>{i+1}.{data}</div>
                                <div><button onClick={()=>removeActivity(i)}>Remove</button></div>
                            </p>
                           
                        </>
                        );
                    })
                }
            </div>
        </>
    );

*/