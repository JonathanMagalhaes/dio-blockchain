# Desafio

<p>O rodízio de veículos de Bravoos é uma restrição à circulação de veículos na cidade. Com o propósito de melhorar as condições ambientais reduzindo a carga de poluentes na atmosfera,incluindo na região de Westeros, se consolidou como um instrumento para reduzir congestionamentos nas principais vias da cidade, nos horários de maior movimento. Nas ruas delimitadoras não é permitido o tráfego de cavalos e carruagens que estejam dentro da restrição. Há uma escala que determina em quais dias da semana quais veículos não podem circular. Essa escala é regida pelo último dígito da placa do animal, sendo:
- Segunda-feira, digito final da placa 1 e 2
- Terça-feira, digito final da placa 3 e 4
- Quarta-feira, digito final da placa 5 e 6
- Quinta-feira, digito final da placa 7 e 8
- Sexta-feira, digito final da placa 9 e 0

Os motoristas que são flagrados violando a restrição de circulação são autuados com multa de 4 galinhas e condenados a passar 1 semana na Muralha.
</p>

<h3>Entrada</h3>

<p>A primeira linha de entrada representa a quantidade de testes <b>N</b> (0 <= <b>N</b> < 1000) que deverão ser considerados. As demais entradas são cadeia de caracteres com tamanho máximo <b>S</b> (1 <= <b>S</b> <= 100) que representam cada placa que deverá ser analisada, de tal forma que, cada placa fique em uma única linha de entrada. O formato esperado para uma placa veicular válida em Bravoos é "<b>AAA-9999</b>", tal que A é um caracter válido em [A-Z], e 9 um dígito numérico válido em [0-9].</p>

<h3>Saída</h3>

<p>O conjunto de valores válidos como saída são: SEGUNDA, TERCA, QUARTA, QUINTA e SEXTA, de acordo com a tabela de restrições predefinida, e FALHA caso a placa não apresente o padrão definido.</p>

<p>Exemplo:</p>

<p>
    Entrada: 
    3
    ABC-1234
    XYZ-1010
    AAA3333

    Saída: 
    TERCA
    SEXTA
    FALHA
</p>
<p>
    Entrada: 
    4
    abc-1234
    a-1010
    ABCD-1234
    AIQ-2001

    Saída: 
    FALHA
    FALHA
    FALHA
    SEGUNDA
</p>