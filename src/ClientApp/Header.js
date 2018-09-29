import React, {
    Component
} from "react";
import Button from "@material-ui/core/Button";

class Header extends Component {
    render() {
        return (
            <Button variant="contained" color="primary">
                Hello
            </Button>
        );
    }
}

export default Header;