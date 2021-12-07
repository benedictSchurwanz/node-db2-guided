const knex = require('knex')

const configs = require('../knexfile')

const currentEnv = process.env.NODE_ENV || 'development'

const configToUse = configs[currentEnv]

const connection = knex()
