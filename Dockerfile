FROM golang:latest
EXPOSE 8413
RUN mkdir /usr/src/anepokis
ADD . /usr/src/anepokis
WORKDIR /usr/src/anepokis
RUN go build -o /usr/bin/anepokis .
CMD ["/usr/bin/anepokis"]
