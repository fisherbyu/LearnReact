import React from "react";
import data from "./MovieData.json";
// import MovieCard from "./MovieCard";
const MovieList = data.MovieData;
//Bring in JSON Data


//Create Table Display
function Movies(props: any) {
    return (
        <React.Fragment>
            <div className="container ">
                <div className="row">
                    <h1> My Movie Collection:</h1>
                    {/* Define Head */}
                    <table className="table table-bordered table-striped">
                        <thead className="font-weight-bold">
                            <tr>
                                <td>Title: </td>
                                <td>Category: </td>
                                <td>Year: </td>
                                <td>Director: </td>
                                <td>Rating: </td>
                                <td>Edited: </td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map each item in data to table rows */}
                            {MovieList.map((m) => (
                                <tr>
                                    <td>{m.Title}</td>
                                    <td>{m.Category}</td>
                                    <td>{m.Year}</td>
                                    <td>{m.Director}</td>
                                    <td>{m.Rating}</td>
                                    <td>{m.Edited}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Movies;