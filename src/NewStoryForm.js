import React, {useState} from "react";
import { v4 as uuid } from 'uuid';


function NewStoryForm({createStory}) {

    const [formData, setFormData] = useState({
        noun: "",
        adjective: ""
    });


    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };
    
    const gatherInput = evt => {
        evt.preventDefault();
        createStory({ ...formData, id: uuid() });
        setFormData({ noun: "", adjective: ""});
    };

    return(
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="noun"></label>
                    <input
                    onChange = {handleChange}
                    type = "text"
                    name = "noun"
                    value = {formData.noun}
                    id = "noun"
                    placeholder = "noun"
                    />
                </div>
                <div>
                    <label htmlFor="adjective"></label>
                    <input
                    onChange = {handleChange}
                    type = "text"
                    name = "adjective"
                    value = {formData.adjective}
                    id = "adjective"
                    placeholder = "adjective"
                    />
                </div>
                <button>Get Story</button>
            </form>
        </div>
    )

}

export default NewStoryForm;