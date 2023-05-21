FROM ubuntu
RUN apt-get update 
RUN apt-get -y upgrade
RUN apt-get install -y vim
RUN apt-get install -y nano
RUN apt-get install -y curl
RUN echo "curl installed !"
RUN curl -sL https://deb.nodesource.com/setup_18.x  | bash -
RUN apt-get install -y nodejs

RUN echo "npm installed !"
RUN echo "node version :"
RUN node -v

RUN apt-get install -y git
RUN echo "git installed !"
RUN echo "git version :"
RUN git --version

RUN mkdir reactjs
RUN echo "Folder created !"

COPY . reactjs/

#RUN npm init react-app my-app
#RUN cd my-app

WORKDIR reactjs/