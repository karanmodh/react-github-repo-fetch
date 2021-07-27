import React, { useState } from "react";
import RepoCard from "./RepoCard";

function Search() {
    const [search, setSearch] = useState("");
    const [repos, setRepos] = useState([]);
    
    function handleSubmit(username){
        var url = `https://api.github.com/users/${username}/repos`;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                setRepos(responseJson)
            });
    }

    return (
        <div>
            <input value={search} onChange={e=> setSearch(e.target.value)} />
            <button onClick={()=>handleSubmit(search)}>Submit</button>
            <hr/>
                {repos.map((repo) => <RepoCard key={repo.id} name={repo.name} description={repo.description}> </RepoCard>)}
            
        </div>
    );
};

export default Search;