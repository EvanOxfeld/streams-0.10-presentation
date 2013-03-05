# Streams in NodeJS

## Goals
* Explore event-driven programming in NodeJS
    * More than events & callbacks
* Learn to use Streams
* Learn to write Streams

## Outline
* What is an I/O bound problem?
* What is NodeJS?
* Overview - Explore this class of problem in NodeJS
* Event-driven programming
    * Code example - synchronous read (e.g. a whole file)
    * Code example - Event Emitter w/ on 'data'
    * Echo TCP server w/o socket.pipe(socket)
    * Build up echo server, introduce buffering & backpressure
    * How did Node solve the on 'data' pattern? 
* Streams with util.pump
    * Code example
    * Issues
* Streams with .pipe()
    * Show how _using_ Streams is _easy_
        * Define types of Streams here?
    * Compare to unix pipes
    * Simple demo using core streams?
* Problems with Streams today
    * Demo old unzip
    * Explore buffering, back-pressure, and spew streams
* Streams Tomorrow, Today
    * Changes to stream.Readable & stream.Writable
    * Duplex, Transform, PassThrough
    * Demo unzip with readable-stream / v0.9
    * UntilStream
        * Live code using new unshift() method??
* Streams in Rails?
* Conclusion
* References

