const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name,alternative_names,origin, prerequisites ,variations,
    hips_flexibility, core_strength, legs_strength FROM tricks`,
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
      data,
    meta
  }
}
module.exports = {
    getMultiple
}

async function create(newtrick){
    const result = await db.query(
      `INSERT INTO tricks 
      (name, atlernative_names, origin, prerequisites, variations, hips_flexibility, core_strength, legs_strength) 
      VALUES 
      (?, ?, ?, ?, ?, ?, ?, ? )`, 
      [
        newtrick.name, newtrick.alternative_names, newtrick.origin, newtrick.prerequisites,
        newtrick.variations, newtrick.hips_flexibility, newtrick.core_strength, newtrick.legs_strength
      ]
    );
  
    let message = 'Error in creating new trick';
  
    if (result.affectedRows) {
      message = 'New trick added successfully';
    }
  
    return {message};
  }
  
  module.exports = {
    getMultiple,
    create
  }

  //put to update
  async function update(id, changeTrick){
    const result = await db.query(
      `UPDATE tricks 
      SET name=?, 
          atlernative_names=?, 
          origin = ?, 
          prerequisites= ?, 
          variations = ?, 
          hips_flexibility= ?, 
          core_strength = ?, 
          legs_strength = ? 
      WHERE id=?`, 
      [
        changeTrick.name, changeTrick.released_year,
        changeTrick.githut_rank, changeTrick.pypl_rank,
        changeTrick.tiobe_rank, id
      ]
    );
  
    let message = 'Error in updating tricks';
  
    if (result.affectedRows) {
      message = 'tricking move updated successfully';
    }
  
    return {message};
  }