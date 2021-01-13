import { Max } from 'class-validator'
import { Column, Entity, ManyToOne } from 'typeorm'
import InternalEntity from './InternalEntity'
import User from './User'

@Entity()
export default class Fleet extends InternalEntity {
	@Column()
	@Max(240)
	body: string

	@ManyToOne(() => User, (author) => author.fleets)
	author: User

	@Column({ default: 0 })
	likes: number

	@Column({ type: 'simple-array' })
	likers: string[]
}