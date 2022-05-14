import { Component } from "react";
import "./Clock.css";

interface ClockState {
    time: string;
}

class Clock extends Component<{}, ClockState> {

    // Timer code -> used for closing the timer in componentWillUnmount()
    // when you use some object that has something "continues..."/ listening to events
    private timerId: number;

    // 1st Lifecycle Hooks -> react creates an object from this class
    //usage: init state, send props to super class
    public constructor(props: {}) {
        super(props);
        this.state = { time: "" };
    }

    // 2nd componentDidMount ("mounted" - by the word meaning it's ready to use)
    //usage: perform side-effect once
    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date();
            this.setState({ time: now.toLocaleTimeString() });
        }, 1000);
    }

    // 3rd render UI needs to be updated (basically this one runs before the 2nd wroten here above)
    // usage: return back the component UI
    public render(): JSX.Element {
        return (
            <div className="Clock Box">
                <p>{this.state.time}</p>
            </div>
        );
    }

    // 4th componentDidUpdated - props or states has been changed
    // usage: do your logic if props or state has been changed
    public componentDidUpdated(): void {

    }

    // 5th componentWillUnmount - component is about to be destroyed
    //usage: close things, clean things, kill things...
    public componentWillUnmount(): void {
        // close the timer
        window.clearInterval(this.timerId);
    }
}

export default Clock;
