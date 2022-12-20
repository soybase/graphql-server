// get a gene by ID
async function getGene(id) {
    const constraints = [this.pathquery.intermineConstraint('Gene.id', '=', id)];
    const query = this.pathquery.interminePathQuery(
        this.models.intermineGeneAttributes,
        this.models.intermineGeneSort,
        constraints,
    );
    return this.pathQuery(query)
        .then(this.models.response2genes)
        .then((genes) => {
            if (!genes.length) {
                const msg = `Gene with ID '${id}' not found`;
                this.inputError(msg);
            }
            return genes[0];
        });
}


module.exports = getGene;
