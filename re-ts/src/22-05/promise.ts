type IResolve = (val: any) => any
type IReject = (err: any) => any
type IExecutor = (resolve: IResolve, reject: IReject) => any
type IState = 'pendding' | 'success' | 'fail'

class Promise<T = any> {
	public resolve!: IResolve
	public reject!: IReject
	public state: IState = 'pendding'
	public value!: T
	public err: string = ''
	constructor(executor: IExecutor) {
		this.state = 'pendding'
		this.resolve = (val) => {
			if (this.state === 'pendding') {
				this.state = 'success'
				this.value = val
			}
		}
		this.reject = (err) => {
			if (this.state === 'pendding') {
				this.state = 'fail'
				this.err = err
			}
		}

		try {
			executor(this.resolve, this.reject)
		} catch (error) {
			this.state = 'pendding'
			this.reject(error)
		}
	}
	then(res: IResolve, rej?: IReject): Promise {
		return new Promise((r, j) => {
			if (this.state === 'success') {
				r(res(this.value))
			}
			if (this.state === 'fail') {
				j(rej && rej(this.err))
			}
		})
	}
}

const res = new Promise((res, rej) => {
	rej('sb')
})

res.then(
	(res) => {
		console.log('res', res)
		return 'dd222'
	},
	(err) => {
		console.log('出错啦', err)
	}
).then((r) => {
	console.log('二级', r)
})

export default Promise
