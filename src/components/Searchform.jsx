import React from 'react';

function Searchform() {
    return (
        <form>
            <div class="mb-3">
                <label for="search" className="form-label">Recipe search:
                    <input type="search" className="form-control" id="search" aria-describedby="Recipe search field" />
                </label>
                <div id="searchHelp" className="form-text">Feel free to search by recipe keywords or ingredient names!</div>
            </div>
            <div id="allergens" className="mb-3 form-check container">
                <div id="allergensHelp" className="form-text">Please check all your allergens/intolerances: </div>
                <div className="row">
                    <div className="col">
                        <label className="form-check-label" for="dairy">Dairy
                            <input type="checkbox" className="form-check-input" id="dairy" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="egg">Egg
                            <input type="checkbox" className="form-check-input" id="egg" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="gluten">Gluten
                            <input type="checkbox" className="form-check-input" id="gluten" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="grain">Grain
                            <input type="checkbox" className="form-check-input" id="grain" />
                        </label>
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-check-label" for="peanut">Peanut
                            <input type="checkbox" className="form-check-input" id="peanut" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="sesame">Sesame
                            <input type="checkbox" className="form-check-input" id="sesame" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="treeNut">Tree nut
                            <input type="checkbox" className="form-check-input" id="treeNut" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="soy">Soy
                            <input type="checkbox" className="form-check-input" id="soy" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-check-label" for="seafood">Seafood
                            <input type="checkbox" className="form-check-input" id="seafood" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="shellfish">Shellfish
                            <input type="checkbox" className="form-check-input" id="shellfish" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="sulphite">Sulphite
                            <input type="checkbox" className="form-check-input" id="sulphite" />
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label" for="wheat">Wheat
                            <input type="checkbox" className="form-check-input" id="wheat" />
                        </label>
                    </div>
                </div>
                
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Searchform;