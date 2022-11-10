module.exports = (io) => {
    let x = true;
    io.on('connection', socket => {
        sendata(socket)
        console.log('new connection'); 
        
		// socket.on('disconnect', () => console.log('disconnected')); 
		
	})

    function sendata(socket){
        if(x){
            socket.emit('data1');
        }else {
            socket.emit('data2');
            x = !x;
        }
        console.log(`the socket io ${x}`);
        setTimeout(() => {
            sendata(socket);
        }, 3000);
    }
}