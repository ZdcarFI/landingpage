"use server"
import { generateClient } from 'aws-amplify/api'
import * as queries from './queries'
import config from '../amplifyconfiguration.json'
import { Amplify } from 'aws-amplify'

Amplify.configure(config)

export async function apiTest() {
    const client = generateClient()

    const result = await client.graphql({
        query: queries.listServices
    })

    return result
}

