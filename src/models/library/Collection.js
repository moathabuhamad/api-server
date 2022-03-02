class Collection {
  constructor(newModel) {
    this.model = newModel;
  }

  async createData(body) {
    try {
      return await this.model.create(body);
    } catch (error) {
      console.log("error in creatData", error);
    }
  }

  async readData(id) {
    try {
      if (id) {
        return await this.model.findOne({ where: { id: id } });
      } else {
        return await this.model.findAll();
      }
    } catch (error) {
      console.log("error in readData", error);
    }
  }

  async updateData(id, newBody) {
    try {
        return await this.model.update(newBody, { where: { id: id } });
    } catch (error) {
        console.log("error in updateData", error);
    }
  }

  async deleteData(id) {
    try {
        return await this.model.destroy({ where: { id: id } });
    } catch (error) {
        console.log("error in deleteData", error);
    }
  }


  
}

module.exports = Collection;
