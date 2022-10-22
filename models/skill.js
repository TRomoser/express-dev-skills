const skills = [
    {id: 680450, skill: 'HTML', active: true},
    {id: 779666, skill: 'CSS', active: true},
    {id: 779142, skill: 'JavaScript', active: false},
    {id: 235416, skill: 'Embedded JavaScript', active: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.active = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, updatedSkill);
}