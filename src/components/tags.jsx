import React from "react";

export default function tags() {
    const categories= ["React", "JavaScript", "HTML", "CSS", "SCSS", "Bootstrap"]
    const mappedCategories = categories.map((category) =>{return <button key={category} className={`category navbar-${category}`} onClick={}>{category}</button>})

    return (
        <div>
            <h2>Tags</h2>
            {mappedCategories}
        </div>
    )
}
