import { Component, SyntheticEvent } from "react";
import "./Search.css";

interface SearchState {
    textToSearch: string;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = { textToSearch: "" };
    }

    private setValue = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        this.setState({ textToSearch: value });
    }

    private clearValue = () => {
        this.setState({ textToSearch: "" });
    }

    public render(): JSX.Element {
        return (
            <div className="Search Box">

                <input type="text" placeholder="Search something..." onChange={this.setValue} value={this.state.textToSearch} />
                <span>Searching for {this.state.textToSearch}</span>

                <button onClick={this.clearValue}>Clear</button>

            </div>
        );
    }
}

export default Search;
