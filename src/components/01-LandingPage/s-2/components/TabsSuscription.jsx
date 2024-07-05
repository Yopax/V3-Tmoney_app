import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonSuscription from "./ButtonSuscriptionOne";
import CheckSvg from "./CheckSvg";
import ButtonSuscriptionTwo from "./ButtonSuscriptionTwo";
import ButtonSuscriptionTheer from "./ButtonSuscriptionTheer";

export function TabsSuscription() {
  return (
    <Tabs defaultValue="account" className="w-[70%] max-[425px]:w-full ">
      <TabsList className="grid w-[70%] max-[425px]:w-[85%]  px-5 mx-auto grid-cols-3">
        <TabsTrigger value="account">7 DÍAS</TabsTrigger>
        <TabsTrigger value="password">15 DIAS</TabsTrigger>
        <TabsTrigger value="30dias">30 DIAS</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className=" max-sm:items-center max-sm:space-y-6">
        <Card className="max-sm:w-[80%] ">
          <CardHeader>
            <CardTitle className="text-[#0d9488]">PLAN DEMO</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$0</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl ">X7 días</span>
              </div>
              <div>
                <ButtonSuscription/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a eventos de surebets.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="max-sm:w-[80%]" >
          <CardHeader>
            <CardTitle className="text-[#4f46e5]">PLAN ESTÁNDAR</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$45</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl">X7 días</span>
              </div>
              <div>
                <ButtonSuscriptionTwo/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a eventos de surebets.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets ilimitadas al día.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a filtros deportivos.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password" className=" max-sm:items-center max-sm:space-y-6">
      <Card className="max-sm:w-[80%] " >
          <CardHeader>
            <CardTitle className="text-[#0d9488]">PLAN DEMO</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$0</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl">X15 días</span>
              </div>
              <div>
                <ButtonSuscription/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a eventos de surebets.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="max-sm:w-[80%] " >
          <CardHeader>
            <CardTitle className="text-[#4f46e5]">PLAN ESTÁNDAR</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$75</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl">X15 días</span>
              </div>
              <div>
                <ButtonSuscriptionTwo/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a eventos de surebets.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets ilimitadas al día.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a filtros deportivos.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="max-sm:w-[80%] " >
          <CardHeader>
            <CardTitle className="text-[#f39d2f]">PLAN DEMO</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$120</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl">X15 días</span>
              </div>
              <div>
                <ButtonSuscriptionTheer/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a eventos de surebets.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets ilimitadas al día.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a filtros deportivos.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Registro de surebets.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Dashboard administrativo.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="30dias" className=" max-sm:items-center max-sm:space-y-6">
      <Card  className="max-sm:w-[80%] ">
          <CardHeader>
            <CardTitle className="text-[#0d9488]">PLAN DEMO</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$0</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl">X30 días</span>
              </div>
              <div>
                <ButtonSuscription/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a eventos de surebets.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="max-sm:w-[80%] " >
          <CardHeader>
            <CardTitle className="text-[#4f46e5]">PLAN ESTÁNDAR</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$130</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl">X30 días</span>
              </div>
              <div>
                <ButtonSuscriptionTwo/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs ">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs ">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs ">Acceso a eventos de surebets.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs ">Surebets ilimitadas al día.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs ">Acceso a filtros deportivos.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="max-sm:w-[80%] " >
          <CardHeader>
            <CardTitle className="text-[#f39d2f]">PLAN DEMO</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex space-x-4">
                <p className="font-[Provicali] text-7xl text-[#0a1a4a]">$230</p>
                <span className="inline-block align-middle pt-[12%] font-[ObjectiveLight] text-2xl">X30 días</span>
              </div>
              <div>
                <ButtonSuscriptionTheer/>
              </div>
              <div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Prematch y Live.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets hasta un 1%.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a eventos de surebets.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Surebets ilimitadas al día.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Acceso a filtros deportivos.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Registro de surebets.</p>
                </div>
                <div className="flex space-x-2 space-y-1">
                  <CheckSvg />
                  <p className="font-[ObjectiveMedium] text-[#13265f] max-[425px]:text-xs">Dashboard administrativo.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
