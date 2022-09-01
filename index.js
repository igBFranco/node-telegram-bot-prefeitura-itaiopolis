const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, `Olá ${ctx.chat.first_name}, Seja Bem Vindo ao Bot Oficial da Prefeitura de Itaiópolis!`, {});
    bot.telegram.sendMessage(ctx.chat.id, `Para podermos lhe ajudar, selecione uma opção:`, {
        reply_markup: {
            keyboard: [
                [
                    {text: "Atendimento"},
                    {text: "Últimas Notícias"},
                    {text: "Canais Oficiais"},
                    {text: "Ajuda"},

                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
});

bot.on('text', ctx => {
    if (ctx.message.text === "Atendimento") {
        bot.telegram.sendMessage(ctx.chat.id, `Selecione o Setor que deseja o Atendimento:`, {
            reply_markup: {
                keyboard: [
                    [
                        {text: "Administração"},
                        {text: "Controle Interno"},
                        {text: "Contabilidade"},
                    ],
                    [
                        {text: "Tributação"},
                        {text: "Jurídico"},
                        {text: "Recursos Humanos"},
                        {text: "Tesouraria"},
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        })
    }
});

bot.hears('oi', (ctx) => ctx.reply(`Olá! ${ctx.chat.first_name}`))

bot.launch()