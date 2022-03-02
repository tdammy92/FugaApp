import React from 'react'
import {View,ScrollView,Text,ImageBackground, StyleSheet, Image} from 'react-native';


function About() {
    return (
        // <ImageBackground  source={require('../../assets/backgrounds/background1.jpg')} style={styles.backgroundImage}>
        <>



      
            <View style={styles.PageWrapper}>
                <Text style={styles.pageTitle}>About Fuga</Text>
            </View>


            
            
           {/* <AboutSection/> */}
           <ScrollView style={styles.scrolView}>
                    <View>
                        <Text  style={styles.SectionTitle}>Historical Background:</Text>
                        
                        <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/>
                    
                        <Text style={styles.TextBody}>
                                In pursuance of its drive to transform the Education Sector, 
                        the Federal Government had, in 2010, approved the establishment 
                        of twelve (12) new Universities in the six geopolitical zones 
                        of the country. This was intended to open access to tertiary 
                        education for the teeming Nigerian youths. As part of the 
                        effective planning, the Federal Government set up an 
                        Implementation Committee comprising of the National Universities 
                        Commission (NUC), the Tertiary Education Trust Fund (TETFUND) 
                        and other relevant stakeholders. The Committee consulted widely 
                        with the respective State Governors and paid inspection visits 
                        to the proposed sites for the Universities before submitting its 
                        report on 15th November, 2010.
                        The implementation of the first phase of the proposal commenced 
                        in February, 2011, with the establishment of nine Universities, 
                        while the second phase involving the remaining three Universities 
                        including the one in Gashua commenced on 18th February, 2013 with 
                        the appointment of pioneer Vice-Chancellor (Professor Shehu Abdul 
                        Rahaman) and Registrar (Alhaji Sulu Dauda).

                        </Text>

                    </View>
                    <View>
                 <Text  style={styles.SectionTitle}>Location:</Text>
                
                 {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/> */}
               
                <Text style={styles.TextBody}>
                Federal University, Gashua is located in Gashua Local Government Area of Yobe State. 
          Yobe State was carved out of the old Borno State and made a State on 27th August, 
          1991, by the Ibrahim Badamasi Babangida Military Administration. The literacy level 
          of the State is too low compared to other states, especially those in the southern 
          part of the country. Access to basic, secondary and tertiary education is impeded by 
          a number of factors. It is this imperfection that motivated the Federal Government to 
          establish a Federal University in Yobe State. The benefits derivable from the 
          unfettered access to the University education by communities of a rural State like 
          Yobe need to be emphasized. The foresight of the Federal Government in bringing 
          tertiary education to doorstep of people of Yobe is indeed salutary.
          Subsistence Farming is the main occupation of the vast majority of the people with 
          main agricultural products being wheat, maize, sorghum, millet, rice, onions, 
          groundnut, beans, cotton, sesame, tomatoes and gum Arabic.
          Potiskum town is noted as one of the largest cattle market in Nigeria, while Gashua 
          is well-known for its fishery. Agricultural production is, however, not large-scale 
          nor it is mechanized.
		Yobe State has a number of proven reserves of minerals. Millions of tons of gypsum, trona, 
		kaoline, limestone, diatomite and episonte are known to exist, unexplored and unexploited. 
		In fact, the southern part of the State lies in a belt that envisaged to have coal, oil and gas.
		The University is set to help fast track the process of unlocking these potentials as well as 
		impact positively on the people and Nigerians in general. Already the University has, in line 
		with Government’s policy thrust and cognizant of the local economic activities and peculiarities 
		of the host environment, adopted its expected programme focus viz: agriculture, desert studies, 
		irrigation studies and environmental management.

                </Text>

            </View>
            <View>
                    <Text  style={styles.SectionTitle}>MISSION:</Text>
                    
                    {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/> */}
                
                    <Text style={styles.TextBody}>
                    To provide timely, relevant and transformational academic programme through focused 
            teaching and research that are responsive to the needs of the local, national and global 
            community in a rapidly changing world.

                    </Text>

            </View>
            <View>
                    <Text  style={styles.SectionTitle}>Motto:</Text>
                    
                    {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/> */}
                
                    <Text style={styles.TextBody}>
                    The University motto is “Knowledge is Success” which, however, is written in Arabic 
          script ( ) translating as “Al-ilmu Falah”. The motto captures the essence of University 
          education generally and underlines the importance attached to education by the university’s 
          host community as well as the need to acquire knowledge in all its ramifications because of 
          its illuminating role to humanity. Throughout human history, the enduring key to individual 
          and collective success is knowledge. While this motto acknowledges the universal value of 
          education to society at large, it also particularly suggests the part historically played by 
          the university’s host society in the development of Islamic Education in Nigeria and a large 
          part of the West African sub-region.

                    </Text>

            </View>
            <View>
                    <Text  style={styles.SectionTitle}>Philosophy:</Text>
                    
                    {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/> */}
                
                    <Text style={styles.TextBody}>
                    Federal University, Gashua is an institution of higher learning that seeks to be sensitive 
          and responsive to immediate needs of the society and give every person the opportunity to 
          acquire knowledge. It is also committed to excellence and integrity in the pursuit of knowledge 
          within an environment that respects diversity and gender mainstreaming.

                    </Text>

            </View>
            <View>
                    <Text  style={styles.SectionTitle}>Logo:</Text>
                    
                    <Image style={styles.sectionImg} source={require('../../assets/imgs/image_three.jpg')}/>
                
                    <Text style={styles.TextBody}>
                    The University logo is an abstract concept boldly shrouded by the university name. 
                    Inside the abstract are a Book, a Pen, a Camel and a Gum Arabic tree, which are 
                    superimposed on the university colours. The motto is also firmly situated in the 
                    centre in Arabic calligraphy. The main features of the logo are:

                    </Text>
                    <Text style={styles.TextBody}>
                        The University logo is an abstract concept boldly shrouded by the university name. 
                        Inside the abstract are a Book, a Pen, a Camel and a Gum Arabic tree, which are 
                        superimposed on the university colours. The motto is also firmly situated in the 
                        centre in Arabic calligraphy. The main features of the logo are:

                    </Text>
                    <Text  style={styles.textList}>
                        {'\u2B24'}
                        The Books and Pen: Symbolizes the teaching, learning and research mandates of the university
                    </Text>
                    <Text style={styles.textList}>
                        {'\u2B24'}
                        The Serration (the White cut into the Blue): The white which cuts into the blue background from the 
                        bottom symbolize River Yobe which flows through the host State and from which the State itself got 
                        its name.
                    </Text>
                    <Text style={styles.textList}>
                        {'\u2B24'}
                        The Gum Arabic Tree: While Gum Arabic is just one of the major cash crops in Yobe and the adjoining States, 
                        its inclusion on the logo underlines the central position of agriculture as the main economic activity of 
                        the host State; and
                    </Text>
                    <Text style={styles.textList}>
                        {'\u2B24'}
                        The Camel superimposed on Brown Background: Present one of the most prevalent animals used for many purposes 
                        by the people of the University host State and adjoining States. Being a rugged animal, the camel also 
                        symbolizes the resilience, doggedness and determination of the people.
                    </Text>

            </View>




           </ScrollView>
           </>



        // </ImageBackground>
    )
}


const styles = StyleSheet.create({
    
    PageWrapper:{
        marginVertical:20,
        marginHorizontal:20,
        marginBottom:20,

    },
    pageTitle:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        color:'#4eced4'
    },
    scrolView:{
        paddingHorizontal:20,
        marginBottom:15,
    },
    SectionTitle:{
        fontSize:22,
        fontWeight:'500',
        paddingBottom:10,
        paddingTop:15
    },
    sectionImg:{
        height:250,
        borderRadius:20,
        shadowColor:'#4eced4',
        width:'100%',
        marginHorizontal:10,
        marginVertical:10,
        
       

    },
    TextBody:{
        fontSize:16,
        textAlign:'justify',
    },
    textList:{
        marginTop:10,
        fontSize:16,
        textAlign:'justify',
        marginHorizontal:10,
    },
    homeBtn:{
   
     marginVertical:50
    },

   

      backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

})

export default About
