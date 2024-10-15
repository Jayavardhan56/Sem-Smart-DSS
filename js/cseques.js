document.addEventListener("DOMContentLoaded", function() {
    Object.assign(document.body.style, {
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    });


    const container = document.querySelector(".container");
    const questionsSection = document.getElementById('questions-section');
    const selectedMidterm = document.getElementById('selected-midterm');
    const questionsContainer = document.getElementById('questions-container');
    const backToCseBtn = document.getElementById('back-to-cse');
    const quizForm = document.getElementById('quiz-form');


    Object.assign(container.style, {
        backgroundColor: "#000000",
        padding: "30px 25px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.1)",
        width: "600px",
        textAlign: "center",
        overflowY: "auto",
        maxHeight: "90vh", 
    });


    Object.assign(questionsSection.style, {
        textAlign: "left",
    });

    Object.assign(selectedMidterm.style, {
        marginBottom: "20px",
    });


    Object.assign(backToCseBtn.style, {
        backgroundColor: "#555555",
        color: "white",
        padding: "10px 20px",
        marginTop: "20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s",
    });

    backToCseBtn.addEventListener("mouseenter", function() {
        backToCseBtn.style.backgroundColor = "#777777";
    });
    backToCseBtn.addEventListener("mouseleave", function() {
        backToCseBtn.style.backgroundColor = "#555555";
    });

    backToCseBtn.addEventListener('click', function() {
        window.location.href = 'cse.html'; 
    });

    // MCQ Questions Data
    const questionsData = {
        "Java Programming": {
            "mid1": [
                {
                    question: "Which of the following is not a Java keyword?",
                    options: [
                        "class",
                        "if",
                        "void",
                        "define"
                    ],
                    answer: 3
                },
                {
                    question: "Which method is used to start a thread in Java?",
                    options: [
                        "run()",
                        "start()",
                        "init()",
                        "execute()"
                    ],
                    answer: 1
                },
                {
                    question: "Which keyword is used to inherit a class in Java?",
                    options: [
                        "extend",
                        "extends",
                        "implement",
                        "inherits"
                    ],
                    answer: 1
                },
                {
                    question: "What will happen if two threads access the same resource simultaneously without synchronization?",
                    options: [
                        "It will run fine",
                        "Data inconsistency",
                        "Compilation error",
                        "Program crash"
                    ],
                    answer: 1
                },
                {
                    question: "Which method must be implemented by all threads in Java?",
                    options: [
                        "start()",
                        "run()",
                        "main()",
                        "stop()"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following is true for constructors in Java?",
                    options: [
                        "They have the same name as the class",
                        "They have a return type",
                        "They can be static",
                        "They must be private"
                    ],
                    answer: 0
                },
                {
                    question: "What is the default value of a boolean in Java?",
                    options: [
                        "true",
                        "false",
                        "0",
                        "null"
                    ],
                    answer: 1
                },
                {
                    question: "In Java, which exception is thrown when a thread is waiting, sleeping, or doing some processing, and it is interrupted?",
                    options: [
                        "InterruptedException",
                        "IOException",
                        "ThreadException",
                        "NullPointerException"
                    ],
                    answer: 0
                },
                {
                    question: "Which of the following does not allow duplicate values in Java?",
                    options: [
                        "List",
                        "Array",
                        "Set",
                        "Queue"
                    ],
                    answer: 2
                },
                {
                    question: "Which of the following is used to create an object in Java?",
                    options: [
                        "allocate",
                        "create",
                        "new",
                        "construct"
                    ],
                    answer: 2
                }
            ],
            "mid2": [
                {
                    question: "Which of the following is a part of Java Full Stack development?",
                    options: [
                        "JSP",
                        "Swing",
                        "AWT",
                        "JDBC"
                    ],
                    answer: 0
                },
                {
                    question: "In AWT, which class is the superclass of all components?",
                    options: [
                        "Component",
                        "Container",
                        "Panel",
                        "Frame"
                    ],
                    answer: 0
                },
                {
                    question: "Which of the following is used to handle events in AWT?",
                    options: [
                        "Listeners",
                        "Handlers",
                        "Controllers",
                        "Managers"
                    ],
                    answer: 0
                },
                {
                    question: "What does JDBC stand for?",
                    options: [
                        "Java Database Connectivity",
                        "Java Development Control",
                        "Java Direct Connection",
                        "Java Data Control"
                    ],
                    answer: 0
                },
                {
                    question: "Which of the following is a front-end framework used in Java Full Stack?",
                    options: [
                        "Angular",
                        "Spring",
                        "Hibernate",
                        "Struts"
                    ],
                    answer: 0
                },
                {
                    question: "In Java Full Stack, which framework is primarily used for building RESTful web services?",
                    options: [
                        "Hibernate",
                        "Spring Boot",
                        "Struts",
                        "JSF"
                    ],
                    answer: 1
                },
                {
                    question: "Which AWT component is used to create a button?",
                    options: [
                        "Button",
                        "Label",
                        "TextField",
                        "Checkbox"
                    ],
                    answer: 0
                },
                {
                    question: "What is the purpose of the `pack()` method in AWT?",
                    options: [
                        "To set the size of the window",
                        "To arrange components within the window",
                        "To make the window visible",
                        "To terminate the application"
                    ],
                    answer: 1
                },
                {
                    question: "Which annotation is used in Spring Boot to mark the main application class?",
                    options: [
                        "@SpringApplication",
                        "@EnableAutoConfiguration",
                        "@SpringBootApplication",
                        "@ComponentScan"
                    ],
                    answer: 2
                },
                {
                    question: "In JDBC, which interface is used to execute SQL queries?",
                    options: [
                        "Connection",
                        "Statement",
                        "ResultSet",
                        "DriverManager"
                    ],
                    answer: 1
                }
            ]
        },
        "Artificial Intelligence": {
            "mid1": [
                {
                    question: "What does AI stand for?",
                    options: [
                        "Artificial Information",
                        "Automated Intelligence",
                        "Artificial Intelligence",
                        "Automated Information"
                    ],
                    answer: 2
                },
                {
                    question: "Which of the following is a type of machine learning?",
                    options: [
                        "Supervised Learning",
                        "Reactive Machines",
                        "Symbolic AI",
                        "Evolutionary AI"
                    ],
                    answer: 0
                },
                {
                    question: "What is the main goal of Natural Language Processing (NLP)?",
                    options: [
                        "To enable machines to recognize images",
                        "To enable machines to understand human language",
                        "To enable machines to navigate environments",
                        "To enable machines to learn from data"
                    ],
                    answer: 1
                },
                {
                    question: "Which algorithm is commonly used for classification tasks?",
                    options: [
                        "K-Means",
                        "Linear Regression",
                        "Decision Trees",
                        "Apriori"
                    ],
                    answer: 2
                },
                {
                    question: "What is a neural network?",
                    options: [
                        "A network of computers connected together",
                        "A type of machine learning model inspired by the human brain",
                        "A social network for AI enthusiasts",
                        "A database for storing AI algorithms"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following is an example of reinforcement learning?",
                    options: [
                        "Image Classification",
                        "Spam Detection",
                        "Playing Chess",
                        "Sentiment Analysis"
                    ],
                    answer: 2
                },
                {
                    question: "What is overfitting in machine learning?",
                    options: [
                        "When the model performs well on training data but poorly on unseen data",
                        "When the model performs poorly on training data",
                        "When the model cannot learn from data",
                        "When the model is too simple"
                    ],
                    answer: 0
                },
                {
                    question: "Which of the following is a measure of the accuracy of a classification model?",
                    options: [
                        "Mean Squared Error",
                        "Accuracy",
                        "Silhouette Score",
                        "Confusion Matrix"
                    ],
                    answer: 1
                },
                {
                    question: "What is the purpose of the activation function in a neural network?",
                    options: [
                        "To initialize the weights",
                        "To introduce non-linearity into the model",
                        "To normalize the input data",
                        "To update the weights during training"
                    ],
                    answer: 1
                },
                {
                    question: "Which library is commonly used for deep learning in Python?",
                    options: [
                        "NumPy",
                        "Pandas",
                        "TensorFlow",
                        "Matplotlib"
                    ],
                    answer: 2
                }
            ],
            "mid2": [
                {
                    question: "Which of the following is a generative model in AI?",
                    options: [
                        "Support Vector Machines",
                        "Decision Trees",
                        "Generative Adversarial Networks (GANs)",
                        "K-Nearest Neighbors"
                    ],
                    answer: 2
                },
                {
                    question: "What is the Turing Test designed to assess?",
                    options: [
                        "The computational power of a machine",
                        "The ability of a machine to exhibit intelligent behavior equivalent to a human",
                        "The efficiency of an algorithm",
                        "The memory capacity of a computer"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following is a component of Knowledge Representation in AI?",
                    options: [
                        "Backpropagation",
                        "Semantic Networks",
                        "Gradient Descent",
                        "Reinforcement Signals"
                    ],
                    answer: 1
                },
                {
                    question: "What is the primary function of an expert system?",
                    options: [
                        "To process natural language",
                        "To solve complex problems by reasoning through knowledge",
                        "To recognize images",
                        "To navigate robots"
                    ],
                    answer: 1
                },
                {
                    question: "Which algorithm is used for searching in a graph?",
                    options: [
                        "Bubble Sort",
                        "Depth-First Search",
                        "Linear Regression",
                        "K-Means Clustering"
                    ],
                    answer: 1
                },
                {
                    question: "What is the main purpose of dimensionality reduction?",
                    options: [
                        "To increase the number of features",
                        "To reduce the number of features while preserving important information",
                        "To improve the training speed of models",
                        "To enhance the complexity of the model"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following techniques is used for anomaly detection?",
                    options: [
                        "Principal Component Analysis",
                        "K-Means Clustering",
                        "Isolation Forest",
                        "Linear Regression"
                    ],
                    answer: 2
                },
                {
                    question: "What is transfer learning?",
                    options: [
                        "Training a model from scratch on a new dataset",
                        "Using a pre-trained model on a new but related task",
                        "Transferring data from one model to another",
                        "Learning multiple tasks simultaneously"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following is a type of ensemble learning?",
                    options: [
                        "Neural Networks",
                        "Random Forest",
                        "Support Vector Machines",
                        "Naive Bayes"
                    ],
                    answer: 1
                },
                {
                    question: "What is the role of a loss function in machine learning?",
                    options: [
                        "To initialize the model parameters",
                        "To measure how well the model's predictions match the actual data",
                        "To preprocess the data",
                        "To select the features"
                    ],
                    answer: 1
                }
            ]
        },
        "Object Oriented Analysis and Design": {
            "mid1": [
                {
                    question: "What does OOA stand for?",
                    options: [
                        "Object Oriented Architecture",
                        "Object Oriented Analysis",
                        "Operational Oriented Analysis",
                        "Operational Oriented Architecture"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following is a principle of Object-Oriented Design?",
                    options: [
                        "Procedural Abstraction",
                        "Encapsulation",
                        "Top-Down Design",
                        "Global Variables"
                    ],
                    answer: 1
                },
                {
                    question: "What is a class in object-oriented programming?",
                    options: [
                        "An instance of an object",
                        "A blueprint for creating objects",
                        "A function that operates on objects",
                        "A collection of global variables"
                    ],
                    answer: 1
                },
                {
                    question: "Which UML diagram is used to show the dynamic behavior of a system?",
                    options: [
                        "Class Diagram",
                        "Sequence Diagram",
                        "Component Diagram",
                        "Deployment Diagram"
                    ],
                    answer: 1
                },
                {
                    question: "What is inheritance in OOP?",
                    options: [
                        "Encapsulating data and methods",
                        "Creating new classes from existing ones",
                        "Polymorphic behavior",
                        "Hiding implementation details"
                    ],
                    answer: 1
                },
                {
                    question: "What is polymorphism?",
                    options: [
                        "The ability of different objects to respond to the same method call in different ways",
                        "Encapsulating data and methods",
                        "Creating new classes from existing ones",
                        "Hiding implementation details"
                    ],
                    answer: 0
                },
                {
                    question: "Which of the following is not an object-oriented programming language?",
                    options: [
                        "Java",
                        "C++",
                        "Python",
                        "C"
                    ],
                    answer: 3
                },
                {
                    question: "What is abstraction in OOP?",
                    options: [
                        "The process of hiding implementation details and showing only functionality",
                        "The process of combining data and methods",
                        "The process of creating a new class from an existing class",
                        "The process of having multiple forms"
                    ],
                    answer: 0
                },
                {
                    question: "Which UML diagram represents the static structure of a system?",
                    options: [
                        "Use Case Diagram",
                        "Sequence Diagram",
                        "Class Diagram",
                        "Activity Diagram"
                    ],
                    answer: 2
                },
                {
                    question: "What is a use case in UML?",
                    options: [
                        "A scenario that describes how a user interacts with a system",
                        "A diagram that shows object interactions",
                        "A blueprint for creating objects",
                        "A list of system requirements"
                    ],
                    answer: 0
                }
            ],
            "mid2": [
                {
                    question: "What is the main goal of Object-Oriented Design (OOD)?",
                    options: [
                        "To define system requirements",
                        "To design the system's software architecture",
                        "To implement the system using code",
                        "To test the system for bugs"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following design patterns provides a way to create objects without specifying the exact class of object that will be created?",
                    options: [
                        "Singleton",
                        "Factory Method",
                        "Observer",
                        "Decorator"
                    ],
                    answer: 1
                },
                {
                    question: "What is the Singleton pattern used for?",
                    options: [
                        "To allow multiple instances of a class",
                        "To ensure a class has only one instance and provide a global point of access to it",
                        "To create a family of related objects",
                        "To add responsibilities to objects dynamically"
                    ],
                    answer: 1
                },
                {
                    question: "Which design pattern is used to decouple an abstraction from its implementation?",
                    options: [
                        "Bridge",
                        "Adapter",
                        "Facade",
                        "Strategy"
                    ],
                    answer: 0
                },
                {
                    question: "What is the purpose of the Adapter pattern?",
                    options: [
                        "To allow incompatible interfaces to work together",
                        "To simplify interactions between complex subsystems",
                        "To define a one-to-many dependency",
                        "To control the creation of objects"
                    ],
                    answer: 0
                },
                {
                    question: "Which design pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically?",
                    options: [
                        "Observer",
                        "Mediator",
                        "Chain of Responsibility",
                        "Command"
                    ],
                    answer: 0
                },
                {
                    question: "What is the Decorator pattern used for?",
                    options: [
                        "To restrict object creation",
                        "To add new functionalities to objects dynamically",
                        "To define a family of algorithms",
                        "To provide a simplified interface to a complex system"
                    ],
                    answer: 1
                },
                {
                    question: "Which design pattern provides a simplified interface to a complex subsystem?",
                    options: [
                        "Facade",
                        "Proxy",
                        "Composite",
                        "Flyweight"
                    ],
                    answer: 0
                },
                {
                    question: "What is the Factory Method pattern used for?",
                    options: [
                        "To ensure a class has only one instance",
                        "To allow a class to defer instantiation to subclasses",
                        "To provide a way to create objects without specifying the exact class",
                        "To separate an object's interface from its implementation"
                    ],
                    answer: 2
                },
                {
                    question: "Which design pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations?",
                    options: [
                        "Command",
                        "Template",
                        "Strategy",
                        "State"
                    ],
                    answer: 0
                }
            ]
        },
        "Computer Networks": {
            "mid1": [
                {
                    question: "What is the primary function of the OSI model?",
                    options: [
                        "To define network hardware",
                        "To standardize network communication",
                        "To manage network security",
                        "To provide routing algorithms"
                    ],
                    answer: 1
                },
                {
                    question: "Which layer of the OSI model is responsible for establishing, managing, and terminating connections?",
                    options: [
                        "Physical Layer",
                        "Data Link Layer",
                        "Network Layer",
                        "Session Layer"
                    ],
                    answer: 3
                },
                {
                    question: "What does TCP stand for?",
                    options: [
                        "Transmission Control Protocol",
                        "Transfer Control Protocol",
                        "Transmission Connection Protocol",
                        "Transfer Connection Protocol"
                    ],
                    answer: 0
                },
                {
                    question: "Which protocol is used for secure communication over the internet?",
                    options: [
                        "HTTP",
                        "FTP",
                        "HTTPS",
                        "SMTP"
                    ],
                    answer: 2
                },
                {
                    question: "What is the purpose of a router in a network?",
                    options: [
                        "To connect multiple devices within a single network",
                        "To forward data packets between different networks",
                        "To provide wireless connectivity",
                        "To assign IP addresses to devices"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following is an example of a network topology?",
                    options: [
                        "Ethernet",
                        "Token Ring",
                        "Star",
                        "Bluetooth"
                    ],
                    answer: 2
                },
                {
                    question: "What is the main difference between IPv4 and IPv6?",
                    options: [
                        "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses",
                        "IPv4 is wireless, while IPv6 is wired",
                        "IPv4 supports more devices than IPv6",
                        "There is no significant difference"
                    ],
                    answer: 0
                },
                {
                    question: "Which protocol is used to translate domain names to IP addresses?",
                    options: [
                        "HTTP",
                        "DNS",
                        "FTP",
                        "SMTP"
                    ],
                    answer: 1
                },
                {
                    question: "What does LAN stand for?",
                    options: [
                        "Local Area Network",
                        "Large Area Network",
                        "Long Area Network",
                        "Light Area Network"
                    ],
                    answer: 0
                },
                {
                    question: "Which device operates at the Data Link Layer of the OSI model?",
                    options: [
                        "Router",
                        "Switch",
                        "Hub",
                        "Repeater"
                    ],
                    answer: 1
                }
            ],
            "mid2": [
                {
                    question: "What is the primary purpose of the Transport Layer in the OSI model?",
                    options: [
                        "To handle routing and forwarding of packets",
                        "To provide reliable data transfer services",
                        "To define electrical and physical specifications",
                        "To manage sessions between applications"
                    ],
                    answer: 1
                },
                {
                    question: "Which protocol is used for sending emails?",
                    options: [
                        "HTTP",
                        "FTP",
                        "SMTP",
                        "DNS"
                    ],
                    answer: 2
                },
                {
                    question: "What is a subnet mask used for?",
                    options: [
                        "To identify the network and host portions of an IP address",
                        "To encrypt data packets",
                        "To prioritize network traffic",
                        "To assign IP addresses dynamically"
                    ],
                    answer: 0
                },
                {
                    question: "Which wireless standard operates at 2.4 GHz and supports speeds up to 54 Mbps?",
                    options: [
                        "802.11a",
                        "802.11b",
                        "802.11g",
                        "802.11n"
                    ],
                    answer: 2
                },
                {
                    question: "What is NAT and what is its primary use?",
                    options: [
                        "Network Address Translation; to allow multiple devices to share a single public IP address",
                        "Network Access Technology; to provide wireless access",
                        "Network Authentication Token; to secure network access",
                        "Network Analysis Tool; to monitor network traffic"
                    ],
                    answer: 0
                },
                {
                    question: "Which protocol ensures reliable data transmission?",
                    options: [
                        "UDP",
                        "TCP",
                        "IP",
                        "ICMP"
                    ],
                    answer: 1
                },
                {
                    question: "What is the function of the Application Layer in the OSI model?",
                    options: [
                        "To handle data encryption",
                        "To provide network services directly to user applications",
                        "To manage data compression",
                        "To control the physical devices on the network"
                    ],
                    answer: 1
                },
                {
                    question: "Which routing protocol uses hop count as its metric?",
                    options: [
                        "OSPF",
                        "BGP",
                        "RIP",
                        "EIGRP"
                    ],
                    answer: 2
                },
                {
                    question: "What is a VLAN?",
                    options: [
                        "Virtual Local Area Network; a method to create separate networks within the same physical network",
                        "Variable Length Area Network; a network with variable bandwidth",
                        "Virtual Link Aggregation Network; a network that aggregates multiple links",
                        "Variable VLAN Allocation Network; a network with dynamic VLAN assignment"
                    ],
                    answer: 0
                },
                {
                    question: "Which protocol is used to query and modify directory services?",
                    options: [
                        "HTTP",
                        "LDAP",
                        "FTP",
                        "SNMP"
                    ],
                    answer: 1
                }
            ]
        },
        "Theory of Computation": {
            "mid1": [
                {
                    question: "What is the study of automata concerned with?",
                    options: [
                        "Designing computer hardware",
                        "Understanding the nature and limits of computation",
                        "Developing user interfaces",
                    ],
                    answer: 1
                },
                {
                    question: "What is a finite automaton?",
                    options: [
                        "A machine with unlimited memory",
                        "A computational model with a finite number of states",
                        "A type of Turing machine",
                        "A network protocol"
                    ],
                    answer: 1
                },
                {
                    question: "What is a context-free grammar used for?",
                    options: [
                        "Defining programming language syntax",
                        "Encrypting data",
                        "Optimizing algorithms",
                        "Managing memory allocation"
                    ],
                    answer: 0
                },
                {
                    question: "What does the Church-Turing thesis propose?",
                    options: [
                        "That any function that can be computed algorithmically can be computed by a Turing machine",
                        "That all programming languages are equivalent",
                        "That computers can simulate human intelligence",
                        "That there are problems which cannot be solved by any computational model"
                    ],
                    answer: 0
                },
                {
                    question: "What is the class P in computational complexity?",
                    options: [
                        "Problems solvable in polynomial time by a deterministic Turing machine",
                        "Problems solvable in polynomial time by a non-deterministic Turing machine",
                        "Problems verifiable in polynomial time",
                        "Problems that are undecidable"
                    ],
                    answer: 0
                },
                {
                    question: "What is an NP problem?",
                    options: [
                        "Problems that can be solved in non-deterministic polynomial time",
                        "Problems that can be verified in polynomial time",
                        "Both A and B",
                        "Problems that are undecidable"
                    ],
                    answer: 2
                },
                {
                    question: "What is a Turing machine?",
                    options: [
                        "A theoretical computational model that defines an abstract machine",
                        "A physical computer used by Alan Turing",
                        "A type of finite automaton",
                        "A programming language"
                    ],
                    answer: 0
                },
                {
                    question: "What is decidability in computation?",
                    options: [
                        "Whether a problem can be solved by any algorithm",
                        "Whether a problem can be solved in polynomial time",
                        "Whether a problem is NP-hard",
                        "Whether a problem can be optimized"
                    ],
                    answer: 0
                },
                {
                    question: "What is the Pumping Lemma used for?",
                    options: [
                        "Proving that a language is regular or not",
                        "Designing efficient algorithms",
                        "Encrypting data",
                        "Defining context-sensitive languages"
                    ],
                    answer: 0
                },
                {
                    question: "Which class contains all problems that can be solved by a deterministic Turing machine in exponential time?",
                    options: [
                        "P",
                        "NP",
                        "EXPTIME",
                        "PSPACE"
                    ],
                    answer: 2
                }
            ],
            "mid2": [
                {
                    question: "What is the main difference between deterministic and non-deterministic Turing machines?",
                    options: [
                        "Deterministic machines have finite states, while non-deterministic do not",
                        "Deterministic machines have a single possible action for each state and symbol, while non-deterministic can have multiple",
                        "Non-deterministic machines are faster",
                        "There is no difference"
                    ],
                    answer: 1
                },
                {
                    question: "What is the class NP-Complete?",
                    options: [
                        "Problems that are both in NP and NP-hard",
                        "Problems that are only in NP",
                        "Problems that are only NP-hard",
                        "Problems that are undecidable"
                    ],
                    answer: 0
                },
                {
                    question: "Which problem was the first to be proven NP-Complete?",
                    options: [
                        "Traveling Salesman Problem",
                        "Boolean Satisfiability Problem (SAT)",
                        "Knapsack Problem",
                        "Graph Coloring Problem"
                    ],
                    answer: 1
                },
                {
                    question: "What is the significance of the P vs NP problem?",
                    options: [
                        "It asks whether every problem whose solution can be quickly verified can also be quickly solved",
                        "It asks whether P equals EXPTIME",
                        "It asks whether NP problems can be reduced to P problems",
                        "It asks whether NP-Complete problems are undecidable"
                    ],
                    answer: 0
                },
                {
                    question: "What is a pushdown automaton?",
                    options: [
                        "A finite automaton with no memory",
                        "A finite automaton with a stack",
                        "A Turing machine with multiple tapes",
                        "A type of non-deterministic finite automaton"
                    ],
                    answer: 1
                },
                {
                    question: "What class of languages can be recognized by a context-sensitive grammar?",
                    options: [
                        "Regular Languages",
                        "Context-Free Languages",
                        "Context-Sensitive Languages",
                        "Recursively Enumerable Languages"
                    ],
                    answer: 2
                },
                {
                    question: "What is the class PSPACE?",
                    options: [
                        "Problems solvable in polynomial time",
                        "Problems solvable in polynomial space",
                        "Problems verifiable in polynomial time",
                        "Problems solvable in non-deterministic polynomial time"
                    ],
                    answer: 1
                },
                {
                    question: "What is an oracle machine?",
                    options: [
                        "A Turing machine that can solve specific problems instantly",
                        "A physical computer used for computations",
                        "A finite automaton with an external memory",
                        "A machine that performs cryptographic functions"
                    ],
                    answer: 0
                },
                {
                    question: "Which theorem states that if a language is decidable, then it is also recognizable?",
                    options: [
                        "Rice's Theorem",
                        "Cook-Levin Theorem",
                        "Church-Turing Thesis",
                        "Kleene's Theorem"
                    ],
                    answer: 2
                },
                {
                    question: "What is a decidable language?",
                    options: [
                        "A language for which there exists a Turing machine that halts and accepts for all strings in the language",
                        "A language that cannot be recognized by any Turing machine",
                        "A language that is both regular and context-free",
                        "A language that requires exponential time to decide"
                    ],
                    answer: 0
                }
            ]
        }
    };
    /**
     * Function to parse query parameters from the URL.
     * @returns {Object} An object containing key-value pairs of query parameters.
     */
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        pairs.forEach(pair => {
            const [key, value] = pair.split("=");
            if (key) {
                params[decodeURIComponent(key)] = decodeURIComponent(value || '');
            }
        });
        return params;
    }

    const params = getQueryParams();
    const subject = params['subject'];
    const midterm = params['midterm'];

    if (!subject || !midterm || !questionsData[subject] || !questionsData[subject][midterm]) {
        alert("Invalid parameters. Redirecting to dashboard.");
        window.location.href = 'cse.html';
    } else {
        selectedMidterm.textContent = `${subject} - ${midterm.toUpperCase()}`;
        displayQuestions(subject, midterm);
    }

    /**
     * Function to display MCQs based on subject and midterm.
     * @param {string} subject - The selected subject.
     * @param {string} midterm - The selected midterm.
     */
    function displayQuestions(subject, midterm) {
        const questions = questionsData[subject][midterm];
        if (!questions) {
            questionsContainer.textContent = "No questions available for the selected subject and midterm.";
            return;
        }

        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            Object.assign(questionDiv.style, {
                backgroundColor: "#2c2c2c",
                padding: "15px",
                margin: "10px 0",
                borderRadius: "5px",
                textAlign: "left",
                fontSize: "16px",
            });

            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionText.style.fontSize = "18px";
            questionText.style.marginBottom = "10px";
            questionDiv.appendChild(questionText);

            q.options.forEach((option, optIndex) => {
                const optionLabel = document.createElement('label');
                Object.assign(optionLabel.style, {
                    display: "block",
                    marginBottom: "5px",
                    cursor: "pointer",
                });

                const optionRadio = document.createElement('input');
                optionRadio.type = "radio";
                optionRadio.name = `question${index}`;
                optionRadio.value = optIndex;
                Object.assign(optionRadio.style, {
                    marginRight: "10px",
                });

                optionRadio.setAttribute('aria-label', option); // Accessibility improvement

                optionLabel.appendChild(optionRadio);
                optionLabel.appendChild(document.createTextNode(option));

                questionDiv.appendChild(optionLabel);
            });

            questionsContainer.appendChild(questionDiv);
        });
    }

    const submitBtn = document.querySelector('.submit-btn');
    Object.assign(submitBtn.style, {
        backgroundColor: "#28a745",
        color: "white",
        padding: "10px 20px",
        marginTop: "20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s",
    });

    submitBtn.addEventListener("mouseenter", function() {
        submitBtn.style.backgroundColor = "#218838";
    });
    submitBtn.addEventListener("mouseleave", function() {
        submitBtn.style.backgroundColor = "#28a745";
    });

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateScore();
    });

    function calculateScore() {
        const questions = questionsData[subject][midterm];
        let score = 0;
        const results = [];

        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            const userAnswer = selectedOption ? parseInt(selectedOption.value, 10) : null;
            const isCorrect = userAnswer === q.answer;
            if (isCorrect) {
                score += 1;
            }
            results.push({
                question: q.question,
                userAnswer: userAnswer !== null ? q.options[userAnswer] : "Unanswered",
                correctAnswer: q.options[q.answer],
                isCorrect: isCorrect
            });
        });

        const unanswered = results.some(result => result.userAnswer === "Unanswered");
        if (unanswered) {
            const proceed = confirm("You have unanswered questions. Do you want to submit the quiz anyway?");
            if (!proceed) {
                return;
            }
        }

        localStorage.setItem('userScore', score);
        localStorage.setItem('totalQuestions', questions.length);
        localStorage.setItem('quizResults', JSON.stringify(results));

        window.location.href = 'score.html';
    }
});
