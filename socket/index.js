module.exports = (io) => {
    let x = true;
    io.on('connection', socket => {
        sendata(socket)
        socket.on('data1', function(data){
            socket.broadcast.emit('message', data);
        })
		socket.on('disconnect', () => console.log('disconnected')); 
	})

    function sendata(socket){
        if(x){
            socket.emit('data1',  message => console.log('',message));
        }else {
            socket.emit('data2');
            x = !x;
        }
        console.log(`the socket io ${x}`);
        // setTimeout(() => {
        //     sendata(socket);
        // }, 3000);
    }
}