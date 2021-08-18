//bg
import bg_day from 'assets/images/bg_day.png'
import bg_night from 'assets/images/bg_night.png'
//bird
import bird0_0 from 'assets/images/bird0_0.png'
import bird0_1 from 'assets/images/bird0_1.png'
import bird0_2 from 'assets/images/bird0_2.png'
import bird1_0 from 'assets/images/bird1_0.png'
import bird1_1 from 'assets/images/bird1_1.png'
import bird1_2 from 'assets/images/bird1_2.png'
import bird2_0 from 'assets/images/bird2_0.png'
import bird2_1 from 'assets/images/bird2_1.png'
import bird2_2 from 'assets/images/bird2_2.png'
//land
import land from 'assets/images/land.png'
//pipe
import pipe_down from 'assets/images/pipe_down.png'
import pipe_up from 'assets/images/pipe_up.png'
import pipe2_down from 'assets/images/pipe2_down.png'
import pipe2_up from 'assets/images/pipe2_up.png'
//botton
import button_play from 'assets/images/button_play.png'
import button_score from 'assets/images/button_score.png'
import button_ok from 'assets/images/button_ok.png'
//title
import title from 'assets/images/title.png'
//tutorial
import tutorial from 'assets/images/tutorial.png'
//ready
import ready from 'assets/images/text_ready.png'
//die
import die1 from 'assets/images/die1.png'
import die2 from 'assets/images/die2.png'
import die3 from 'assets/images/die3.png'
import die4 from 'assets/images/die4.png'
import die5 from 'assets/images/die5.png'
import die6 from 'assets/images/die6.png'
import die7 from 'assets/images/die7.png'
import die8 from 'assets/images/die8.png'
import die9 from 'assets/images/die9.png'
import die10 from 'assets/images/die10.png'
import die11 from 'assets/images/die11.png'
import die12 from 'assets/images/die12.png'
import die13 from 'assets/images/die13.png'
import die14 from 'assets/images/die14.png'
//font
import font0 from 'assets/images/font_0.png'
import font1 from 'assets/images/font_1.png'
import font2 from 'assets/images/font_2.png'
import font3 from 'assets/images/font_3.png'
import font4 from 'assets/images/font_4.png'
import font5 from 'assets/images/font_5.png'
import font6 from 'assets/images/font_6.png'
import font7 from 'assets/images/font_7.png'
import font8 from 'assets/images/font_8.png'
import font9 from 'assets/images/font_9.png'
//over
import over from 'assets/images/text_game_over.png'
//medals
import medals0 from 'assets/images/medals_0.png'
import medals1 from 'assets/images/medals_1.png'
import medals2 from 'assets/images/medals_2.png'
import medals3 from 'assets/images/medals_3.png'
//panel
import panel from 'assets/images/score_panel.png'
import num0 from 'assets/images/number_score_00.png'
import num1 from 'assets/images/number_score_01.png'
import num2 from 'assets/images/number_score_02.png'
import num3 from 'assets/images/number_score_03.png'
import num4 from 'assets/images/number_score_04.png'
import num5 from 'assets/images/number_score_05.png'
import num6 from 'assets/images/number_score_06.png'
import num7 from 'assets/images/number_score_07.png'
import num8 from 'assets/images/number_score_08.png'
import num9 from 'assets/images/number_score_09.png'
//tpying
import { IImages } from './typing'

const images: IImages = {
    bg: {
        bg_day,
        bg_night
    },
    bird: {
        bird0: {
            bird0_0,
            bird0_1,
            bird0_2
        },
        bird1: {
            bird1_0,
            bird1_1,
            bird1_2
        },
        bird2: {
            bird2_0,
            bird2_1,
            bird2_2
        }
    },
    land: land,
    pipe: {
        pipe: {
            pipe_down,
            pipe_up
        },
        pipe2: {
            pipe2_down,
            pipe2_up
        }
    },
    button: {
        play: button_play,
        score: button_score,
        ok: button_ok
    },
    title,
    tutorial,
    ready,
    die: [
        die1,
        die2,
        die3,
        die4,
        die5,
        die6,
        die7,
        die8,
        die9,
        die10,
        die11,
        die12,
        die13,
        die14
    ],
    font: [
        font0,
        font1,
        font2,
        font3,
        font4,
        font5,
        font6,
        font7,
        font8,
        font9
    ],
    over,
    medals: [
        medals0,
        medals1,
        medals2,
        medals3
    ],
    panel: {
        panel,
        nums: [
            num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6,
            num7,
            num8,
            num9
        ]
    }
}

export default images
