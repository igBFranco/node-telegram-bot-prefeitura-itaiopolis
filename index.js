const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, `Olá ${ctx.chat.first_name}, Seja Bem Vindo! Para ajudarmos melhor, selecione a opção desejada:`, {
        reply_markup: {
            keyboard: [
                [
                    {text: "Atendimento"},
                    {text: "Contato"},
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
})

bot.hears('oi', (ctx) => ctx.reply(`Olá! ${ctx.chat.first_name}`))

bot.launch()