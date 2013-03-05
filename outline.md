# Streams in NodeJS

## Goals
* Explore event-driven programming in NodeJS
    * More than events & callbacks
* Learn to use Streams
* Learn to write Streams

## Outline
* What is NodeJS?
    * Break down nodejs.org definition
* What is an I/O bound problem?
    * Code example of buffering data w/o Streams
    * Socket communication w/o socket.pipe(socket)
    * Is there a good abstraction for the on 'data' pattern?
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

