From java:8
COPY /target/CucumberBasic-1.0-SNAPSHOT-jar-with-dependencies.jar CucumberBasic-1.0-SNAPSHOT-jar-with-dependencies.jar
CMD ["/usr/lib/jvm/java-8-openjdk-amd64/bin/java", "-Dfile.encoding=UTF8", "target/CucumberBasic-1.0-SNAPSHOT-jar-with-dependencies.jar"]