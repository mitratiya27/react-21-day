import { useState } from "react";

export default function StudentManagement(){
    const [student, setStudent] = useState('');
    const [stdList, setStdList] = useState([]);
    const [search, setSearch] = useState("");

    function addStudent(){
        if (!student.trim()) return; 
        setStdList((prevList) => { 
            const updateList = [...prevList, student];
            console.log(updateList);
            return updateList;
        });
        setStudent('');
    }

    function deleteStudent(i){
        const updateListData = stdList.filter((elem, id) => { return i !== id });
        setStdList(updateListData);
    }

    
    const filteredStudents = stdList.filter((student) =>
        student.toLowerCase().includes(search.toLowerCase())
    );  

    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>Student Management App</h1>
                <br />
            
                <span>
                    <input 
                        type='text'
                        placeholder='Enter Student Name'   
                        value={student}
                        onChange={e => setStudent(e.target.value)} 
                    />
                </span>
                <button onClick={addStudent}>Add</button>
                
                
                <div>
                    <h3>Search Student</h3>
                    <input
                        type="text"
                        placeholder="Search student..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    
                    
                    <div style={{ marginTop: "10px", color: "blue" }}>
                        {search && filteredStudents.map((data, i) => {
                           
                            const originalIndex = stdList.indexOf(data);
                            return (
                                <p key={i} style={{ margin: "5px 0" }}>
                                    Found: ID {originalIndex + 1} - {data}
                                </p>
                            );
                        })}
                        {search && filteredStudents.length === 0 && <p>No matches found.</p>}
                    </div>
                </div>
                
                <h3>Student List</h3>
                {
                    stdList.map((data, i) => (
                        <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '5px 0' }}>
                            <span>{i + 1}. {data}</span>
                            <button onClick={() => deleteStudent(i)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}