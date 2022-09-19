import React, { useState } from "react";
import Story from "./Story";
import NewStoryForm from "./NewStoryForm";

function StoryList() {
    const [story, setStory] = useState([]);
    const add = storyObj => {
        setStory(story => [...story, storyObj]);
    };
    const remove = id => {
        setStory(story => story.filter(story => story.id !== id));
    };

    const storyElements = story.map(story => (
        <Story
        key = {story.id}
        id = {story.id}
        noun = {story.noun}
        adjective = {story.adjective}
        handleRemove = {remove}
        />
    ));

    return (
        <div>
            <NewStoryForm createStory={add} />
            {storyElements}
        </div>
    );
}

export default StoryList;