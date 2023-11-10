import { Component } from "react";
import PublicationModal from "./PublicationModal";
const publicationsList = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "Graph Neural Networks based Model for Aroma Prediction using Molecular Structures. Published in: 2022 IEEE 3rd Global Conference for Advancement in Technology (GCAT)",
    link: "https://ieeexplore.ieee.org/abstract/document/9971823",
    description: `In scientific and forensic research investigations, predicting sensory systems stimulus as evidence is inevitable. It is a decades-old challenge in the field of cheminformatics, which can be solved using various Learning techniques. These techniques have made a good impact in Computer Vision (CV), Nature Language Processing (NLP) and Speech Recognition (SR). Among sensory systems, the Olfaction Mechanism is moderately under-explored due to its high complexity in odorant molecular structures. Advanced computers facilitate the machine learning techniques to classify into clusters and predict the aroma. An attempt is made to embed Graph Neural Networks (GNNs) for olfactory senses prediction, significantly encompasses the traditional methods. In this investigation, the dataset curated by the olfactory experts is used for transfer learning which is based on the spatial odor representations (pattern recognition) of the molecular structures of the substance. Aroma prediction plays a key role in various research domains including synthetic-fragrance manufacturing, human dietetics, sensory neurosciences, and forensic crime investigations.`,
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "Early Detection of Forest Fire Using Mixed Learning Techniques and UAV",
    link: "https://www.hindawi.com/journals/cin/2022/3170244/",
    description: `Over the last few decades, forest fires have increased due to deforestation and global warming. Many trees and animals in the forest are affected by forest fires. Technology can be efficiently utilized to solve this problem. Forest fire detection is inevitable for forest fire management. The purpose of this work is to propose deep learning techniques to predict forest fires, which would be cost-effective. The mixed learning technique is composed of YOLOv4 tiny and LiDAR techniques. Unmanned aerial vehicles (UAVs) are promising options to patrol the forest by making them fly over the region. The proposed model deployed on an onboard UAV has achieved 1.24 seconds of classification time with an accuracy of 91% and an F1 score of 0.91. The onboard CPU is able to make a 3D model of the forest fire region and can transmit the data in real time to the ground station. The proposed model is trained on both dense and rainforests in detecting and predicting the chances of fire. The proposed model outperforms the traditional methods such as Bayesian classifiers, random forest, and support vector machines.`,
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "Early Detection of ColoRectal Cancer Using Patch-Based Hybrid Model and Transfer Learning",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-9819-5_7",
    description: `ColoRectal cancer (CRC) is one of the diseases reasoning to higher morbidity thereby higher modality rates. It is the gastrointestinal tumor that grows rapidly without giving any symptoms to the patients till the last stages. Endoscopic images are the effective method for the diagnosis of the ColoRectal Cancer in the early stages. However, there are many chances of the misdiagnosis of the disease because of the smaller lesion sizes and shape. The goal of this paper is to use the latest deep learning methods to manifest the detection system of ColoRectal lesions, finding the positions and their classification using the white light endoscopic images. This helps the physicians to reduce the misclassification and misdiagnosis rate. However, in the convolutional feature extraction process, it is difficult to extract to features from cancer affected regions. In this analysis all the high level and low-level features are examined for early prediction. The dataset used for analysis of this model is taken from the hospital comprising the samples of 100,000 images where 54,000 images are the ColoRectal cancer affected patients and 46,000 images are non-cancerous. This method is performing accurately when compared with the other traditional methods, hence it is potential enough to assist the clinicians.`,
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "PsychNet: Explainable Deep Neural Networks for Psychiatric Disorders and Mental Illness",
    link: "https://ieeexplore.ieee.org/abstract/document/9997832",
    description: `Mental disorders are irreversible that cause disturbance in behavior, sleep, and emotional cognition. These are also considered as neurodegenerative diseases that highly impact cognitive skills. Central gray matte analysis is inevitable to track brain activity. Complete cure of mental disorder is achieved if the early medication is prognised. Hence, there has been an interest in making computational models that can help psychiatrists to detect mental disorders in their pre-stages of it. However, there is a significant gap in improving prediction that can aid psychiatrists in better prognosis. The state-of-the-art models performed binary classification, as far the authors knowledge goes, multiclass classification of psychiatric disorders are not yet performed. To address these challenges, we propose a novel model, PsychNet that can classify and track down the psychiatric diseases in the early stages. PsychNet is built with three modules. In the first, the binary classification is performed to diversify Alzheimer's and non-Alzheimer's images. The PsychNet enhanced classification and detection accuracy through fine tuning. Second, a novel feature extraction along with noise removal techniques are proposed using the RogerHat filters for the multi-class classification of the Alzheimer's disease types. A novel feature extraction technique is proposed to classify because of the nonlinear high complex neuroimaging data. The model's explainability is carried out in the final module by detecting the diseased area using automated features and generating a bounding box around the affected area. PsychNet surpasses the existing models to obtain classification and detection accuracies of 92% and 94%, respectively, on the dataset of fMRI scan images. The proposed model achieved 93.72 average area under the receiver operating characteristic curve (AUCROC) for balanced diseased datasets using l0-fold cross-validation. The same model architecture can also be used to detect mental disorders over the genotypes and EEG signals.`,
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "Deep Learning based techniques for Neuro-degenerative disorders detection",
    link:
      "https://www.sciencedirect.com/science/article/abs/pii/S0952197623002877?via%3Dihub",
    description: `Mental disorders are neural issues that influence brain cognition and social connectivity. The significant increase in mental disorders needs prompt detection for effective treatment. Psychiatric disorders can be partially diagnosed with constant counseling by using anti-depressants and other inhibitors. However, this is a laborious and also time-consuming process. This leads to investigating the computational techniques that can be applied to detect psychiatric illness in its premature phases. Various works are proposed to detect mental disorders from four data forms: neuro-images, EEG signals, textual data, and gene data. The researchers aim to investigate various models that can detect mental illness using advanced deep learning techniques. Through exploring authoritative databases, the authors gathered papers and studied classic machine learning and primary deep learning techniques for anticipating mental health issues. As the results of various models, the study also presented the difficulties and constraints that machine learning researchers have encountered while studying psychological disorders. The collected articles are categorized into four forms based on the data type used for the analysis. This paper proposes four different hybrid models to detect mental disorders in the early stages from four different data forms. Standardized metrics like area under the receiver operating characteristic curve (AUC–ROC) score and average classification accuracy (ACA) are used to evaluate the models. The proposed models outperformed all the state-of-the-art models in disorder prediction. Furthermore, the study discusses specific suggestions for future studies and development in the use of learning algorithms in the field of mental health.
`,
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "A Novel Deep Learning Framework for Diabetic Retinopathy Detection",
    link: "https://ieeexplore.ieee.org/abstract/document/9997826",
    description: `Diabetes is one of the most dangerous diseases that is facing by many people in the world. Diabetic Retinopathy (DR) is a retinal disease that is caused by the Diabetes Mellitus (DM). DM causes the lesions on the retinal layer thereby affecting the vision. If it is not detected at the initial stages, it might lead to complete blindness and also DR is an irreversible disease. Hence, early detection of DR is inevitable to avoid the vision loss of the patients. Expeditious detection can decrease the complications of the DR thereby vision of the patient is preserved. It is a laborious task for the ophthalmologists to diagnosis DR manually, since it takes a lot more time and cost-effective. Mis-diagnosis might happen if the ophthalmologists are not skillful and experienced in detecting DR from the fundus images. Over the past two decades, deep learning has shown a significant raise in the bio-medical image processing and its niche areas obtaining the best performance. The state-of-the-art Convolutional Neural Networks (CNN) models achieved notable performance in classifying DR, but the severity levels of DR are not analyzed. To address these challenges, we propose a CNN based model that is used to analyze the fundus oculi retinal images to locate the eyeball structure and observe the presence of DR. The proposed model's hyperparameters are regulated by the transfer learning techniques for mapping the label of the images. The dataset used for training and testing the model is taken from the Kaggle that contains the retinal images and its corresponding severity in a scale. Severity level of the images is classified into five different categories from a normal to DR presented eyeball. The accuracy of the proposed model is 94.92%, proving the confident detection and prediction of the DR from the retinal images.
`,
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "A Novel Approach to Detect Fake News Using eXtreme Gradient Boosting",
    link: "https://ieeexplore.ieee.org/abstract/document/9800777",
    description: `The usage of social media has expanded in recent years, allowing them to get news from around the world at any time. This in turn, is questioning the authenticity of the news that is being spread both globally and locally. Fake news such as misinformation, gossip is widely disseminated on social media having a negative impact on society and lives of the people. As a result, much study is being is carried out in order to detect them. The data can be clustered into smaller groups based on the type of news using a few learning approaches. A novel method has been proposed for prediction of the authenticity of the news of the LIAR dataset [1] using Logistic Regression and a boosting algorithm eXtreme Gradient Boosting (XGBoost) for efficacy, computational pace and performance of the model. This method detects fake news by analyzing the semantic and syntactic connections between sentences. Various graphs (like heat maps, bar charts) are plotted to show the distribution of the authenticity of news and also to compare the predicted result with the actual one. The proposed strategy addresses the effects of the hoax's global spread. People are hungry for information to defend themselves and others in a community where humans are confronting large-scale risks from harms. Some key traits such as Sentimental features, Content-based features, Frequency features, and Hybrid features (combinations of two or more features) are incorporated for early prediction of fake news spread via social media. The liar dataset is used to train the method and tested for accurate results. The experimental accuracy is found out to be 98%.
`,
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "Gastric Cancer Detection using Hybrid-based Network and SHAP Analysis Book Chapter part of Explainable Artificial Intelligence for Biomedical Applications",
    link: "https://ieeexplore.ieee.org/document/10158465",
    description: `Since its first appearance, artificial intelligence has been ensuring revolutionary outcomes in the context of real-world problems. At this point, it has strong relations with biomedical and today’s intelligent systems compete with human capabilities in medical tasks. However, advanced use of artificial intelligence causes intelligent systems to be black-box. That situation is not good for building trustworthy intelligent systems in medical applications. For a remarkable amount of time, researchers have tried to solve the black-box issue by using modular additions, which have led to the rise of the term: interpretable artificial intelligence. As the literature matured (as a result of, in particular, deep learning), that term transformed into explainable artificial intelligence (XAI). This book provides an essential edited work regarding the latest advancements in explainable artificial intelligence (XAI) for biomedical applications. It includes not only introductive perspectives but also applied touches and discussions regarding critical problems as well as future insights. Topics discussed in the book include: • XAI for the applications with medical images • XAI use cases for alternative medical data/task • Different XAI methods for biomedical applications • Reviews for the XAI research for critical biomedical problems. Explainable Artificial Intelligence for Biomedical Applications is ideal for academicians, researchers, students, engineers, and experts from the fields of computer science, biomedical, medical, and health sciences. It also welcomes all readers of different fields to be informed about use cases of XAI in black-box artificial intelligence. In this sense, the book can be used for both teaching and reference source purposes.`,
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "RoadSDNet: A Robust Algorithm for Road Boundary Detection and Segmentation using Mixed Networks and Hough Transform",
    link: "https://ieeexplore.ieee.org/document/10202533",
    description: `In the present day, Road boundary detection is one of the most focused problems as it is a causative for many road accidents. To ensure the passenger's safety an accurate model that can ensure road segmentation along with detection of the road boundary is inevitable. Road boundary detection in both structured and unstructured roads is a challenging task in machine vision and AI. Classic machine learning algorithms are proposed for this problem, however there exists many difficulties in deploying them in real time. This becomes a laborious task which requires huge computation in real time. This paper addresses a novel algorithm, RoadSDNet for road boundary detection and segmentation. This algorithm can be easily deployed in real time as it consumes very less computation time giving a significant accuracy compared with the other existing methods. This system can be implemented on AMD Ryzen 250 platform, allowing easy installation over the vehicles. The hyperbola fitting techniques required for the interpolation of the disguised road is adopted from the Hough Transform and produced as the extended HT Network. This network ensures the smooth polynomial curve in accordance with the road track-line and tangent relationship. The proposed takes input only from the camera but not the other hardware components like LiDAR sensor, Proximity sensor. This can be considered as the novel contribution of the paper. The experiments performed on this model proves proposed method is robust and polent in the huge traffic also and works in the uncertain road conditions too giving noteworthy accuracy and precision.`,
  },
  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading: "Certain integral representations of hypergeometric polynomials",
    link: "https://ui.adsabs.harvard.edu/abs/2023AIPC.2707b0004K/abstract",
    description: `A study of few properties of 2-variable generalized hypergeometric polynomial(2VGHP) of the set Rn (β ; γ ; x, y) [1], as sum and product formulae and we derive this polynomial can be represented as some integral representations such as single and double integral representations. Many supplemental applications, as well as known and unknown hypergeometric functions can be obtained by these results.`,
  },
  {
    id: 11,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "Neural architecture of 3D face modelling using generative adversarial networks",
    link:
      "https://pubs.aip.org/aip/acp/article-abstract/2707/1/020040/2889638/Neural-architecture-of-3D-face-modelling-using",
    description: `3D Face modelling is not same as 2D Face image generation using DeepFake. This paper suggests a model, in solving the problem of responsive 3D face generation using less training data. By using Deep Convolutional Neural Networks (CNNs), the loss function is defined on feature maps. Optimization problem is solved using Stochastic Gradient Descent (SGD). Generative Adversarial Networks (GANs) are used here to generate 3D Face Model from feature maps. The key contribution of work is finding the regional area in the given face spatial data by coalescence of two techniques and adding into feature vector. Emotional synthesizer is also proposed in the model, to make 3D face realistic by scrambling emotions on 3D Face model. Features are extracted from input data (video clips, images) using CNN and used in training Recurrent Neural Network (RNN) makes it to classify the image to be progressed or not. This model is evaluated against dataset generated with 30 people in laboratory and validates the acceptable performance and boosts up the Inception Score (IS) in 3D Face generation with contemplate limits.
`,
  },
  {
    id: 12,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "VitaDNet: A Deep Learning-Based Approach for Vitamin-D Deficiency Prediction",
    link:
      "https://www.worldscientific.com/doi/abs/10.1142/S0219649223500557?journalCode=jikm",
    description: `Vitamin D (VD) deficiency is a very common disease among elderly people. The lack of VD causes various diseases related to skin, eyes and throat. The previous epidemiological studies tried to predict the vitamin B6 and VD levels from the blood samples. Since this is laborious and time-taking, it is very difficult for the homely people to work on it. There is a strong requirement for the noninvasive method as there is a necessity to detect the deficiency at the early stage. Certain crucial parameters that could be used for analysis are based on the intake of anthropogenic parameters along with the commonly known body vitals. These parameters include the body mass index (BMI), waist circumference (WC), waist-to-height ratio (WHR) and body roundness index (BRI). The dataset used for the prediction of VD has been collected from 501 patients in the age of 40–75 years old. The prediction of VD levels in the body has various complications, like the sex, previous health records, inherent health conditions and body pathology. To consolidate all those parameters and to analyse, a robust model is required to associate the parameters which are used to predict the deficit of VD. A binary set of gated recurrent units (GRUs) are used along with the auto-encoders. The feature extraction and selection module in the network are composed of two different patch-based networks which makes the three-stage network robust. Despite these difficulties, the model is robust enough to predict the levels of VD in the body based on the anthropogenic parameters. To support this network, a sub-VitaDNet module is proposed based on the food taken. Through this network, the food taken is continuously observed and the levels of VD are predicted. Hence, the authors believe that the model is robust enough to predict the VD levels in the body.

Duo model 3d face
`,
  },
  {
    id: 13,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "DIVS: A Real-Time Video Stabilization Framework for Consumer Camera",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-4284-8_28",
    description: `Video stabilization is one of the most interesting areas of research that can be implemented in consumer camera technology. Various works have been proposed to overcome this problem. However, there are many practical difficulties in deploying them in real time. Many frames are taken as an input to generate a stabilized output, which leads to high computation of the image sensing hardware. A novel approach to solve these challenges is proposed in this paper using the Hybrid Deep Neural Network Model (HDNNM) that uses gyroscopic sensor data and the optical flow analysis. This network is based on the deep unsupervised learning techniques, which require less computation and low buffer memory. The workflow of the proposed model is based on the integration of the optical flow with the joint motion representation to maintain a correspondence between the frames and the poses of scene objects. The LSTM module in the network wraps the grid and stabilizes the video frames. The relative motion along with the multi-stage training strategies was adopted to make the model unsupervised. The HDNNM is validated using the ablative dataset collected from various scenes, and the results of the model surpass the existing model’s performance metrics. To the best of the authors’ knowledge, this is the first unsupervised approach to overcome the challenges in video stabilization.
`,
  },
  {
    id: 14,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "FBDNN: Fetus Health Management using  Fourier-based Bi-LSTM Deep Neural Network",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-4284-8_28",
    description: `To reduce the complexity of the input, many existing works in this area used functional Magnetic Resonance Imaging (fMRI) scan images and ultrasound scan images. However, because the existing techniques are more time consuming, It is very difficult to use these methods in real-time situations. In this paper, a novel Fourier-based Bi-directional Long Short-Term Memory (Bi-LSTM) Deep Neural Network (FBDNN) algorithm is proposed to monitor fetuses and find suspicious pathological recordings with comparatively less time complexity. This algorithm uses the Fourier-Curve coefficient interpolation approach to recognise the exterior and boundary of the fetus in the scanned image and splits the curve in an optimised way to simplify the computation. Using this approach, the laborious task of the clinician can be significantly reduced. To reduce time complexity, the proposed State-of-the-Art (SOTA) FBDNN algorithm combines the Bi-LSTM architecture with the Fast-Fourier-Transform (FFT) at the embedding and flattening layers. An open-source UCB (Gynic Repository) dataset of fMRI scan images and ultrasound scan images was combined with the Harvard database of cardiotocographic (CTG) recordings to conduct this study. The latent-diffused dataset of 12000 images and recordings is divided into 4 classes (Normal, Morbid, Pathological Problem, and Emergency), which include 30 attributes that are programmed dynamically and fed into the algorithm. The time complexity of the proposed model is reduced, as the hidden layers are partially trained and left over and then passed on to the upper layers using non-linear activation functions. The Adaptive Moment Estimation (ADAM) optimizer is efficiently used to optimise the hyperparameters of the network. The presented algorithm shows better accuracy, sensitivity, and specificity than the existing architectures (RCNNs, ResNet, and GoogleNet). Hence, the proposed algorithm is viable to deploy in real-time situations.
`,
  },
];

class Publications extends Component {
  render() {
    return (
      <div>
        <h1 className="projects-heading">Publications</h1>
        <PublicationModal publicationsList={publicationsList} />
      </div>
    );
  }
}

export default Publications;
