class MainService {
    model;
    modelName;
    constructor(model, modelName){
        this.model = model;
        this.modelName = modelName;
    }

    create(response, request) {

        this.model
            .create(request.body)
            .then((model) => {
                response.status(200).json({ data: model });
            })
            .catch((error) => {
                response.status(400).json({ error: error.message });
            })

    }
    getAll(response, request) {
        const { offset, limit } = request.params;
        this.model.findAndCountAll({
            offset: offset,
            limit: limit
        }).then((models) => {
            response.status(200).json({ data: models })
        }).catch((error) => {
            response.status(400).json({ error: error.message });
        })

    }
    get(response, request) {
        const { id } = request.params;
        this.model.findOne({
            where: {
                id: id
            }
        }).then((model) => {
            response.status(200).json({ data: model })
        }).catch((error) => {
            response.status(400).json({ error: error.message });
        })

    }
    async update(response, request) {
        const body = request.body;
        try {
            const id = body.id;
            delete body.id;
            const model = await this.model.update(body, {
                where: {
                    id: id
                }
            });
            response.status(200).json({ data: model });

        } catch (error) {
            response.status(400).json({ error: error.message });
        }

    }
    async delete(response, request) {

        try {
            const id = request.params.id;
            await this.model.destroy({
                where: {
                    id: id
                }
            })
            response.send({ message: `${this.modelName} was deleted successful`});
        } catch (error) {
            response.status(500).json({ error: error.message });
        }

    }

}
module.exports = MainService; 