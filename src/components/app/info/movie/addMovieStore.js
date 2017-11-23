import axios from "axios"
 export default {
 		namespaced: true,
 		state:{
 			input:{
 				cName:"三生三世十里桃花",
 				eName:"Once Upon a Time",
 				country:"中国大陆",
 				duration:"120分钟",
 				type:"古装 / 仙侠 / 玄幻 / 爱情",
 				synopsis:"族战神墨渊镇压鬼君擎苍（严屹宽饰）于无王海，魂飞魄散，仙体冰封于青丘炎华洞内，青丘帝姬白浅",
 				release:"2017-8-3(中国大陆)",
 			},
			curPage: 1,
			eachPage: 10,
			maxPage: 0,
			count: 0,
			data: [],
			update:{
				_id:"",
				cName: "",
				eName: "",
				country: "",
				duration: "",
				type: "",
				synopsis: "",
				release: "",
			},
			delateId:"",
			addId:"",
 		},
 		mutations:{
 			getMovies(state, {total,rows}) {
				state.data=rows
				state.count=total
			},
			setUpdate(state, page) {
				state.update = {...page}
			},
			delateData(state, page) {
				state.delateId=page
			},
			addData(state,page){
				console.log(page)
				state.addId=page
				console.log(state.addId)

			}

 		},
 		actions:{
			async getMoviesListAsync(context, {
					page = this.state.movie.curPage,
					rows = 7
				} = {}) {
					const {
						data
					} = await axios.post("/movies/getMoviesList", {
						params: {
							page,
							rows,
						}
					})
					console.log(data)
					context.commit("getMovies", data)
			},
			async addMovieAsync(context) {
					const {
						cName,
						eName,
						country,
						duration,
						type,
						synopsis,
						release,
					} = this.state.movie.input
					const {
						data
					} = await axios.post("/movies/filmsAdd", {
						cName,
						eName,
						country,
						duration,
						type,
						synopsis,
						release,
					})
					context.dispatch("getMoviesListAsync", data)

					context.commit("addData", data._id)
				
		},

			async updateMovieAsync(context) {
					const {
						_id,
						cName,
						eName,
						country,
						duration,
						type,
						synopsis,
						release,
					} = this.state.movie.update
					const {
						data
					} = await axios.post("/movies/filmsAdd", {
						_id,
						cName,
						eName,
						country,
						duration,
						type,
						synopsis,
						release,
					})
					context.dispatch("getMoviesListAsync", data)
					
		},

			async movieDeleteAsync(context) {
				const _id = this.state.movie.delateId
				const {
					data
				} = await axios.post("/movies/delMovie", {
					_id
				})
				context.dispatch("getMoviesListAsync", data)
			},

 		}
 }