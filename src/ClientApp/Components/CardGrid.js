import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"
import { projects } from "../../projects";

class CardGrid extends Component {
    render() {
        return (
            <div className="card-group-flex-wrapper">
                {projects.map((project, index) => {
                    return (
                        <Card key={index} style={{ maxWidth: "300px", maxHeight: "385px", margin: "1rem" }}>
                            <CardMedia style={{ height: "200px" }} image={project.card_img || "http://placehold.it/350x200"} title="Project Image" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    {project.title}
                                </Typography>
                                <Typography component="p">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default CardGrid;