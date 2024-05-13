# ExpO Framework

## Expo Web Application

A web interface for querying ExpO API Server. The application is running [here](https://expo.eng.unibz.it).

If you are interested to know more, feel free to open an issue to provide feedback on the project or reach our team members for more specific cases:

* [Elena Romanenko](https://github.com/mozzherina)
* [Diego Calvanese](http://www.inf.unibz.it/~calvanese/)
* [Giancarlo Guizzardi](https://people.utwente.nl/g.guizzardi)
* [Konstantin Romanenko](https://github.com/astricus)

___
## If you want to run it on your own machine

### Requirements
* Docker 20.10 or later

### Running the environment
In general, you only need to run the `docker-compose` command. 

```shell script
git clone git@github.com:mozzherina/ExpO.git
docker-compose build
docker-compose up -d
```

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

___
## If you want to cite this work

Please, refer to the [PURL](https://purl.org/expo) and
cite the paper: 

Romanenko, E., Calvanese, D., Guizzardi, G.: ExpO: Towards Explaining Ontology-Driven Conceptual Models. (2024) [DOI](https://doi.org/10.1007/978-3-031-59468-7_3)
