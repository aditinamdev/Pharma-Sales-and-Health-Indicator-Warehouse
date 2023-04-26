# Pharma-Sales-and-Health-Indicator-Warehouse
Datawarehouse design for Pharmaceutical sales and Health Indicators affecting obesity, heart diseases and cancer

Problem Setting :
Pharmacy is one of the main components of a thriving human civilization and is extremely important
to the standard of living and defines the health and sanitation of the country or city. Hence it is
extremely important that medicines are in the right hands and is distributed extremely efficiently
across a vast range of networks. A database for a Pharmacy is an extremely efficient and an
important tool in maintaining is distribution network. In this particular problem, we will see how to
create a database and a multidimensional schema for a company called Glenn Pharma responsible
for supplying medicines across Massachussetts.
Problem Definition :
This project intends to build the database design of a business model similar to a Pharmaceutical
database. Keeping extensibility and scalability in mind, we will build a module that can be converted
to a microservice architecture or transferred to a data warehouse to perform data analysis for the
prediction of future trends in technologies. The transformed data is loaded in a data warehouse
where analysis is done. A few of the analysis topics are mentioned below:
1. What drug generates the maximum revenue
2. Who are the top performing salesmen?
3. Who are the biggest customers?
4. What is the monthly sales analysis.
Data :
The data is collected from the database of a Pharmaceutical company called Glenn Pharma and it is
found on dataworld.org. It contains the details about the meetings held between salesmen and
customers, the salesmen, the sutomers and the products which the company is currently dealing
with.
Data Description :
The meeting table contains the record of 2585 meetings held between customers and the sales
representatives and also gives and information of the amount of sales intended for that meeting and
whether the sale was converted or not. The product table contains a list of 30 products with each
sales rep responsible for one product respectively. The customer table contains a list of all the
customers and their contact information which will be useful to sales reps. We also have the
inventory table which gives a list of all the products and their quantities which are stored in the data
warehouse.
END GOAL :
Our end goal in this project is to create a multidimensional model of the pharmaceutical database
which will be useful for further analysis.
