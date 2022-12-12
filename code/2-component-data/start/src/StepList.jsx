import React from "react";

const StepList = (props) => {
    const steps = props.steps.map((step, index) => {
        return <li key={index}>{step}</li>;
    });

    return (
        <section>
            <h3>Steps</h3>
            <ol>{steps}</ol>
        </section>
    );
}

export default StepList;
