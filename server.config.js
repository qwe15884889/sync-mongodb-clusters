module.exports = {
	port : 8081,
	host : "127.0.0.1",
	loop_time : 5,
	max_sync_count_per : 100,
	keys : [
			{name : "ty2" , key : "1234567890ty2" , cluster_info : "mongodb://127.0.0.1:47017/test,mongodb://127.0.0.1:47018/test,mongodb://127.0.0.1:47019/test"},
			{name : "sh" , key : "9876543210sh"}
			],
	server_clusters_info : "mongodb://127.0.0.1:47011/local,mongodb://127.0.0.1:47012/local",
	server_db_info : "mongodb://127.0.0.1:47020/node"
};