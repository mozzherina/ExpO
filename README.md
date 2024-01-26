# ExpO: Towards Explaining Ontology-Driven Conceptual Models

## Expo Web Application

A web interface for querying ExpO server. The application is running [here](https://expo.eng.unibz.it).

If you are interested to know more, feel free to open an issue to provide feedback on the project or reach our team members for more specific cases:

* [Elena Romanenko](https://github.com/mozzherina)
* [Diego Calvanese](http://www.inf.unibz.it/~calvanese/)
* [Giancarlo Guizzardi](https://people.utwente.nl/g.guizzardi)
* [Konstantin Romanenko](https://github.com/astricus)

### Contents

* [Functionality](#functionality)
* [Running your own web interface](#if-you-want-to-run-it-on-your-own-machine)
* [Citing this work](#if-you-want-to-cite-this-work)

___
## Functionality

To __load__ the model you can either provide a JSON file with the model or specify a URL address (models can be found in [OntoUML/UFO Catalog](https://github.com/OntoUML/ontouml-models).
In case you are specifying a URL, please, make sure to use a link to a _raw_ view.

<img src="https://github.com/mozzherina/ExpO/assets/39998083/edeb6c4e-6b96-42b6-943c-bfb9d0a16538"  width="600">

When the graph appears, you can view or scale it, place it in a better position using drag-and-drop. 
The layout of the model is kept according to the original diagram from the [Visual Paradigm](https://www.visual-paradigm.com/). 
Objects (and their hierarchies) are coloured in _red_. Modes are coloured in _blue_. Relators are given in _green_. Events are specified as _yellow_. 
Enumerations (if there are any) are pure _white_. 

![Model](https://github.com/mozzherina/ExpO/assets/39998083/48f89528-0d43-40eb-bada-a6104310825f)

By clicking on the left menu button you can view the concepts and relations, that are currently specified in the graph. You can filter them or reorder.
By clicking on the right menu button you can review constraints that are applied to the model.

<img src="https://github.com/mozzherina/ExpO/assets/39998083/74d1c945-5739-4078-8e28-064447ad4e17"  width="900">

You can apply all the transformation operations that are described for the API [here](https://github.com/mozzherina/expose). 
To run the operation right click on the node of interest and select a corresponding function from the context menu.
The results appear as soon as they are received from the server. Please, keep in mind that __expand__ operation may take up to several seconds.

![Context_menu](https://github.com/mozzherina/ExpO/assets/39998083/fb4b388b-2397-48ee-85a2-b711635328eb)

If you want to apply the abstraction, use the __abstract__ button. Abstraction steps are applied one by one to the whole model. 
The complete description of the approach can be found [here](https://link.springer.com/chapter/10.1007/978-3-031-05760-1_22).
If the button is locked, that means the full abstraction is already reached. 

![Abstraction](https://github.com/mozzherina/ExpO/assets/39998083/bdedc89c-9d72-4013-a8cd-de075c8195a2)

If you don't like the result, you can use _return_ and _replay_ buttons located close to the __abstract__ button.

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

Open [http://localhost:4000](http://localhost:4000) to view it in the browser. N.B.: It could be needed to clear browsing data before.

___
## If you want to cite this work

Please, refer to the [PURL](https://w3id.org/ExpO) and
cite the paper: 

Romanenko, E., Calvanese, D., Guizzardi, G.: ExpO: An Approach Towards Explaining Ontology-Driven Conceptual Models. (2024) _Manuscript submitted for publication._
