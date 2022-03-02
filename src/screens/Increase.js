import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';

function Increase() {
  return (
    // <ImageBackground source={require('../../assets/backgrounds/background1.jpg')} style={styles.backgroundImage}>
    <View style={styles.PageWrapper}>
      <Text style={styles.pageTitle}>How to Increase your GPA</Text>

      <ScrollView style={styles.scrolView}>
        <View>
          <Text style={styles.SectionTitle}>1. Go to class regularly:</Text>

          <Image
            style={styles.sectionImg}
            source={require('../../assets/imgs/image_four.jpg')}
            resizeMode='cover'
          />

          <Text style={styles.TextBody}>
            I know this one is mind-numbingly obvious but it’s important. Many
            professors lecture directly from PowerPoint and post the slides to
            the internet. This makes it tempting to skip class, download the
            lecture notes, and learn the material on your own. Although you can
            probably get away with this in easy courses, you’ll face problems in
            challenging ones. By skipping class, you miss out on a few important
            things: Detailed verbal explanations that are key to understanding
            the material The chance to ask questions and listen to the Q&A of
            other students Special announcements Opportunities for extra credit
            It’s also important to consider how skipping class affects your
            reputation. In most classes, grades are somewhat subjective. This
            means that the grader’s perception of you can make or break your
            grade. If you frequently miss class, you’ll be perceived as someone
            who lacks respect for the professor and the subject matter. Why
            should they give you the benefit of the doubt or round that B+ up to
            an A-? It sounds like a no-brainer, but it’s too important to not
            mention. Skipping class can make you look bad in the eyes of your
            professor. Since grades are somewhat subjective, it’s a good idea to
            avoid irritating the person who will be handing out the marks. If
            attendance is an issue, you could be stuck with a B versus the A-
            you deserve.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>2. Participate in class:</Text>

          <Image
            style={styles.sectionImg}
            resizeMode='cover'
            source={require('../../assets/imgs/image_five.png')}
          />

          <Text style={styles.TextBody}>
            If you’re shy or new to the college experience, it can be difficult
            to muster enough courage to participate in class. Nevertheless, that
            is exactly what you need to do. Class participation shows the
            professor you are eager to learn. It also increases the likelihood
            that you will remember material from class to class. Not only will
            sitting in the front row build self confidence, it will
            automatically engage you in the lecture. You’ll appear to be an
            eager student and highly visible to the teacher. This will help your
            academic reputation and make it more likely you’ll develop a
            relationship with the professor. You’ll have a much easier time
            maintaining focus and will feel more like a participant than a
            passive observer. College lectures tend to build on previous
            material. If you encounter a lecture or concept that you do not
            understand, you should address the issue immediately to avoid
            getting completely lost. Confusing points can be clarified with help
            from your professors, classmates or library resources.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>3. Organize yourself::</Text>

          {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/> */}

          <Text style={styles.TextBody}>
            If you don’t have a study strategy, you can study all day and night
            and still not get anywhere. The only sure way to make the most of
            your study time is to employ a study strategy that complements your
            schedule and learning style. Getting organized is one of the easiest
            ways to raise your GPA in college. When you’re organized, you
            automatically reduce the amount of time and effort that it takes to
            do well in college. Things you should organize (besides your
            thoughts) include: your class schedule, notes, study time, reading
            assignments and handouts. Different professors have different
            teaching styles. Some lecture, some use power point slides and some
            depend on handouts and textbooks. The inconsistency can make
            note-taking problematic from class to class. The best way to handle
            this is to develop a note-taking system that works with each
            professor’s teaching style. The sooner you can get started on your
            assignments, the better. Try keeping a list of proven information
            sources, web apps and other dependable resources so that you can
            find something the second you need it. The saved time can be used to
            study, have fun or just sleep.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>4. Do a weekly study review:</Text>

          {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/> */}

          <Text style={styles.TextBody}>
            A common problem students encounter is trying to learn an enormous
            amount of material right before the midterm or final exam. This is
            practically impossible. You’ll find it much easier if you take a
            gradual approach to studying. At least once a week, review your
            notes starting from the beginning of the course. This only needs to
            take 15 or 20 minutes, just enough time to build familiarity with
            the material. By doing a weekly review you’ll gradually memorize
            everything and will better understand how one concept builds on the
            next. Putting in small amounts of effort on a consistent basis will
            drastically reduce the amount of studying you need to do right
            before the test.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>5. Go to office hours:</Text>

          {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_two.jpg')}/> */}

          <Text style={styles.TextBody}>
            Professors and TA’s usually make themselves available at regular
            times during the week for students to ask questions about
            assignments. Do yourself a favor by taking advantage of this
            opportunity. First, attending office hours will motivate you to get
            ahead on your work and prepare questions to ask. This will give you
            a huge edge in understanding problems that aren’t clearly explained
            in the lectures. Second, it will build your reputation as a
            high-effort student who deserves high grades. If you aren’t happy
            with the grades you’re currently getting, you may want to consider
            talking to your professors. Just remember to be polite. Throwing out
            wild accusations or demanding that a grade be changed is almost
            never a good idea. You will be better off asking about possible
            steps you could take to improve your grade in each class.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>
            6. Befriend with smart students with high GPA:
          </Text>

          {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_three.jpg')}/>
           */}
          <Text style={styles.TextBody}>
            In courses that involve group work, this is essential. No one wants
            to get stuck with a bunch slackers, have to do all the work
            themselves, and end up with a poor grade to show for it. The quality
            of the your learning experience is directly related to the attitudes
            of the people you work with. Working with smart people will
            facilitate discussion. The best way to understand an idea is talking
            about it with other intelligent people. Who you work with also
            affects your academic reputation. If you associate with students
            that aren’t interested in learning, teachers and graders will assume
            you feel the same way. It’s also a great way to connect with people
            who have similar interests and ambitions. You’re bound to make lots
            of friends in college. If you can, try to spend some time with a
            study buddy who has a high GPA. Your smart friend will be able to
            help you out when you struggle and may prove to be a good influence
            should you feel the urge to slack. Taking part in a study group is
            one of the best ways to stay on track and raise your GPA. Study
            groups not only make you accountable, they also force you to become
            more organized and talk about what you have learned. If you can’t
            find a study group to join, try forming one yourself.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>7. Avoid all-nighters:</Text>

          {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_three.jpg')}/>
           */}
          <Text style={styles.TextBody}>
            Generally, having to pull an all-nighter means that you slacked off
            all semester and need to fit 3 months of learning into one day. If
            you use a gradual study strategy this will never be necessary.
            All-nighters don’t work! Yes, it might be possible to get a good
            grade if the course is easy, but it’s much more likely that your
            grade will be significantly lower. All-nighters harm performance
            because they make you tired and stressed. You’ll also forget most of
            what you learn right after the test, decreasing the practical value
            of your education. Although it’s good to spend a fair amount of time
            studying before a test, it’s just as important to get enough rest.
            Sleep improves concentration, solidifies what you have learned and
            improves your ability to organize and recall information. Poor
            performance in school can often be directly linked to sleep
            deprivation.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>8. Make use of Library:</Text>

          <Image
            style={styles.sectionImg}
            resizeMode='cover'
            source={require('../../assets/imgs/image_six.jpg')}
          />

          <Text style={styles.TextBody}>
            Dorm rooms aren’t the best place to study. It’s way too easy to get
            distracted by roommates and visitors. Your study time canl be more
            productive if you use your school’s library or a similar facility.
            Every time you enter that building, your mind will shift into work
            mode and stay there until you decide to leave. You should read
            everything that is assigned to you and then some. Reading a lot
            makes you a better thinker, better writer and, most importantly,
            better student. Although certain classes are more interesting (and
            more important) than others, it’s essential that you take every
            class seriously. If you can maintain a good grade in each class, it
            will make a huge difference on your overall grade point average.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>9. Study Smart:</Text>

          {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_six.jpg')}/> */}

          <Text style={styles.TextBody}>
            Some professors and schools offer opportunities for extra credit.
            These opportunities are GPA gold mines; try to take advantage of
            them. Extra credit can boost your average and enhance your college
            experience. Attending class can be a waste of time if you have a
            long commute or a professor who likes to ramble. For this reason and
            many more, you may want to consider taking some of your classes
            online. You’ll get to study the same material and save time in the
            process. College exams can have a huge impact on your GPA. To make
            sure you’re ready on test day, begin studying as soon as you can.
            Take a little time to review the subject matter each day so you’ll
            be better prepared than you would be if you waited until the last
            minute to cram.
          </Text>
        </View>
        <View>
          <Text style={styles.SectionTitle}>
            10. Set a Goal and Reward Yourself:{' '}
          </Text>

          {/* <Image style={styles.sectionImg} source={require('../../assets/imgs/image_six.jpg')}/> */}

          <Text style={styles.TextBody}>
            Good grades are their own reward, but it doesn’t hurt to have a
            little extra incentive. Try setting a GPA goal and rewarding
            yourself with something that you really want after you achieve it.
            That’s all. Follow these 10 steps and you will see your GPA shoot
            through the roof. Good luck.
          </Text>
        </View>
      </ScrollView>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  PageWrapper: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  homeBtn: {
    marginVertical: 50,
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4eced4',
  },
  scrolView: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  SectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    paddingBottom: 10,
    paddingTop: 15,
  },
  sectionImg: {
    height: 250,
    borderRadius: 20,
    shadowColor: '#4eced4',
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  TextBody: {
    fontSize: 18,
    textAlign: 'justify',
    width:'100%'
  },
  textList: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 5,
  },
});

export default Increase;
