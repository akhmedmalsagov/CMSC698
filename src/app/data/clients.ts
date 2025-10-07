export type Client = {
id: string
name: string
position: string
league: string
country?: string
headshot?: string
accolades?: string[]
}


export const clients: Client[] = [
{ id: '1', name: 'Alex Morozov', position: 'C', league: 'KHL', country: 'RUS', accolades: ['Junior Gold', 'All‑Star'] },
]