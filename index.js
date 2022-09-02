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
                    ],
                    [
                        {text: "Engenharia"},
                        {text: "Educação"},
                        {text: "Patrimônio"},
                        {text: "Licitações"},
                    ],
                    [
                        {text: "Obras"},
                        {text: "Agronegócio"},
                        {text: "Bloco de Notas"},
                        {text: "Casa da Cultura"},
                    ],
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        })
    }
    if (ctx.message.text === "Administração") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: prefeitura@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Controle Interno") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: controleinterno@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Contabilidade") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: contabilidade@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Tributação") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: tributacao@itaiopolis.sc.gov.br
        fiscaltributos@itaiopolis.sc.gov.br
        analistatributario@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Jurídico") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: juridico@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Recursos Humanos") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: rh.prefeitura.itaiopolis@gmail.com`, {});
    }else if (ctx.message.text === "Tesouraria") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: tesouraria@itaiopolis.sc.gov.br
        contabilidade.lorena@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Engenharia") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: engenharia@itaiopolis.sc.gov.br
            topografia@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Educação") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: transporteescolar@itaiopolis.sc.gov.br
            educacaoitaiopolis@yahoo.com.br
            alimento.escolar@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Patrimônio") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: patrimonio.luis@itaiopolis.sc.gov.br`, {});
    }else if (ctx.message.text === "Licitações") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: licitacao@itaiopolis.sc.gov.br
            cotacao.itaiopolis@gmail.com`, {});
    }else if (ctx.message.text === "Agronegócio") {
        bot.telegram.sendMessage(ctx.chat.id, `📞 Telefone: (47)3652-2211`, {});
        bot.telegram.sendMessage(ctx.chat.id, `📧 Email: agronegocio@itaiopolis.sc.gov.br`, {});
    }
});

bot.hears('oi', (ctx) => ctx.reply(`Olá! ${ctx.chat.first_name}`))

bot.launch()